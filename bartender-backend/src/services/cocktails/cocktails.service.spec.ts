import { Test, TestingModule } from '@nestjs/testing';
import { CocktailsService } from './cocktails.service';
import { CocktailsApiService } from '../../apis/cocktails-api/cocktails-api.service';
import { Cocktail } from '../../models/cocktail';

describe('CocktailsService', () => {
  let service: CocktailsService;
  let api: CocktailsApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CocktailsService, CocktailsApiService],
    }).compile();

    service = module.get<CocktailsService>(CocktailsService);
    api = module.get<CocktailsApiService>(CocktailsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should provide a random cocktail', async () => {
    jest.spyOn(api, 'random').mockImplementation(async () => {
      return {
        'drinks': [{
          strDrink: 'cocktail',
          strCategory: 'category',
          strGlass: 'glass',
          strInstructions: 'do something',
          strDrinkThumb: 'url',
          strIngredient1: 'Lemon',
          strMeasure1: '1.5 oz',
        },
        ],
      };
    });
    const res = await service.random();
    expect(res).toEqual({
      name: 'cocktail',
      category: 'category',
      glass: 'glass',
      instructions: 'do something',
      imageUrl: 'url',
      ingredients: [{
        name: 'Lemon',
        measure: '1.5 oz',
      } as Ingredient],
    } as Cocktail);
  });
});
