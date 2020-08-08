import { DbConnection } from "../../../types";
import { Item } from "../../../types/item";

export default class ItemController {
  constructor(private readonly connection: DbConnection) { }

  async list() {
    const items = await this.connection('items').select('*');

    return items.map((item: Item) => ({
      id: item.id,
      title: item.title,
      image_url: `http://10.0.0.188:3333/uploads/${item.image}`,
    }));
  }
}
