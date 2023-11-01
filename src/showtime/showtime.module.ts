import { Module } from '@nestjs/common';
import { ShowtimeService } from './showtime.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowtimeEntity } from './entity/showtime.entity';
import { ShowtimeSummaryEntity } from './entity/showtimeSummary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShowtimeEntity, ShowtimeSummaryEntity])],
  providers: [ShowtimeService],
  exports: [],
})
export class ShowtimeModule {}
