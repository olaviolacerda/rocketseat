import { DbConnection } from "../../../types";
import { Item } from "../../../types/item";
import { CreatePointBodyParams, ListPointsQueryParams, Point } from "../../../types/point";

const serializedPoint = (point: Point) => ({
  ...point,
  image_url: `http://10.0.0.188:3333/uploads/${point.image}`,
});

export default class PointController {
  constructor(private readonly connection: DbConnection) { }

  async list(params: ListPointsQueryParams): Promise<Point[]> {
    const { city, uf, items } = params;

    const points = await this.connection('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', items)
      .where('city', city)
      .where('uf', uf)
      .distinct()
      .select('points.*');

    return points.map(serializedPoint);
  }

  async create(params: CreatePointBodyParams): Promise<Point> {
    const { items, ...pointData } = params;

    const trx = await this.connection.transaction();

    const [point_id] = await trx('points').insert(pointData);

    const pointItems = items
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((item_id: Item['id']) => ({
        item_id,
        point_id,
      }));

    await trx('point_items').insert(pointItems);
    await trx.commit();

    return { ...params, id: point_id };
  }

  async getById(point_id: Point['id']): Promise<any> {
    const point = await this.connection('points')
      .where('id', point_id)
      .first();

    if (!point) {
      return new Error('Point not found.');
    }

    const items = await this.connection('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', point_id)
      .select('items.title');

    return { point: serializedPoint(point), items };
  }
}
