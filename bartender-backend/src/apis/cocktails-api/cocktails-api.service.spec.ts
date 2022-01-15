import { Test, TestingModule } from '@nestjs/testing';
import { CocktailsApiService } from './cocktails-api.service';

describe('CocktailsApiService', () => {
  let service: CocktailsApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CocktailsApiService],
    }).compile();

    service = module.get<CocktailsApiService>(CocktailsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
