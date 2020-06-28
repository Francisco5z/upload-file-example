import { Request, Response } from "express";
import connection from '../db';

class ImageControllers {
  async index(req: Request, res: Response) {
    const users = await connection('users').select('*');

    return res.json(users);
  }
  async create(req: Request, res: Response) {
    const { name } = req.body
     // const image = req.file.filename;

    await connection('users').insert({
      name,
      image: req.file.filename
    });

    return res.status(204).send();
  }
}

export default new ImageControllers();