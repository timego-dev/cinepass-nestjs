import { Module } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ScraperController } from './scraper.controller';
import { HttpModule } from '@nestjs/axios';
import { ShowtimeService } from '../showtime/showtime.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowtimeEntity } from '../showtime/entity/showtime.entity';
import { ShowtimeSummaryEntity } from '../showtime/entity/showtimeSummary.entity';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([ShowtimeEntity, ShowtimeSummaryEntity]),
  ],
  providers: [ScraperService, ShowtimeService],
  controllers: [ScraperController],
})
export class ScraperModule {}
