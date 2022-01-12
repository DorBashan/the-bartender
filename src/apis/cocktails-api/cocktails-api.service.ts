import { Injectable } from '@nestjs/common';
import axios from 'axios'

@Injectable()
export class CocktailsApiService {
  async random(): Promise<any> {
    const resp = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    return resp.data
  }
}
