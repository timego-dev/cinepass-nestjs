import { Module } from '@nestjs/common';
import { ScraperModule } from './scraper/scraper.module';
import { ShowtimeModule } from './showtime/showtime.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowtimeEntity } from './showtime/entity/showtime.entity';
import { ShowtimeSummaryEntity } from './showtime/entity/showtimeSummary.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //TODO: Refactor this section to use the NestJS configuration management feature.
      // Avoid hardcoding sensitive information and use environment variables instead.
      // You may need to create a separate configuration module or use an existing one.
      // Ensure that the solution is scalable and environment agnostic.
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '5600',
      database: 'scraper',
      entities: [ShowtimeEntity, ShowtimeSummaryEntity],
      synchronize: true,
      logging: true,
    }),
    ScraperModule,
    ShowtimeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
