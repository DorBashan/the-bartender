import { Module } from '@nestjs/common';
import { CocktailsController } from './controllers/cocktails/cocktails.controller';
import { CocktailsApiService } from './apis/cocktails-api/cocktails-api.service';
import { CocktailsService } from './services/cocktails/cocktails.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CocktailsController],
  providers: [CocktailsService, CocktailsApiService],
})
export class AppModule {}
