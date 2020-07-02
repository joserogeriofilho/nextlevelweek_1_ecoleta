import { Request, Response } from 'express';
import knex from '../database/connections';

let LOCAL_IP = 'http://192.168.100.8';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
  
    const serializedItems = items.map( item => {
      return{
        id: item.id,
        title: item.title,
        image_url: `${LOCAL_IP}:3333/uploads/${item.image}`
      }
    });
  
    return response.json(serializedItems);
  }
}

export default ItemsController;