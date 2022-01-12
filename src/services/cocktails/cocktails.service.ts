import { Injectable } from '@nestjs/common';
import { Cocktail } from '../../models/cocktail';
import { CocktailsApiService } from '../../apis/cocktails-api/cocktails-api.service';

@Injectable()
export class CocktailsService {
  constructor(private cocktailsApiService: CocktailsApiService) {}

  async random(): Promise<Cocktail> {
    const x = await this.cocktailsApiService.random()
    return this.mapResponseToCocktail(x)
  }

  mapResponseToCocktail(resp: any): Cocktail {
    const drink = resp['drinks'][0]

    const cocktail = {
      name: drink['strDrink'],
      category: drink['strCategory'],
      glass: drink['strGlass'],
      instructions: drink['strInstructions'],
      imageUrl: drink['strDrinkThumb']
    } as Cocktail

    cocktail.ingredients = this.mapResponseToIngredients(drink)

    return cocktail
  }

  mapResponseToIngredients(drink: any): Ingredient[] {
    const ingredients = []
    Array.from(Array(15)).map((_, i) => {
      const index = i + 1
      const name = drink['strIngredient' + index]
      const measure = drink['strMeasure' + index]
      if (name != null) {
        const ingredient = { name: name, measure: measure } as Ingredient
        ingredients.push(ingredient)
      }
    })

    return ingredients
  }
}
