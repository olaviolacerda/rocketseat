import { Request, Response } from 'express';
import * as Uuid from '@somosphi/uuid';

import db from '../database/connection';

export default class ConnectionsController {
  async index(req: Request, res: Response) {
    const [{ total }] = await db('connections').count('* as total');

    return res.json({ total });
  }

  async create(req: Request, res: Response) {
    const { user_id } = req.body;

    await db('connections').insert({
      user_id,
      id: Uuid.generate()
    });

    return res.sendStatus(201);
  }
}