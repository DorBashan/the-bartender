import { Controller, Get } from '@nestjs/common';
import { Cocktail } from '../../models/cocktail';
import { CocktailsService } from '../../services/cocktails/cocktails.service';

@Controller('cocktails')
export class CocktailsController {
  constructor(private cocktailsService: CocktailsService) {
  }

  @Get('random')
  async random(): Promise<Cocktail> {
    return this.cocktailsService.random()
  }
}
