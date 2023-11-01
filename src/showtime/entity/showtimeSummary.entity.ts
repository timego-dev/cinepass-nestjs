import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'showtime-summary', orderBy: { showtime_date: 'ASC' } })
@Unique(['showtimeDate', 'cinemaName', 'movieTitle', 'attributes', 'city'])
export class ShowtimeSummaryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', nullable: false })
  showtimeDate: Date;

  @Column({ nullable: false })
  cinemaName: string;

  @Column({ nullable: false })
  movieTitle: string;

  @Column('varchar', { array: true, nullable: true })
  attributes: string[];

  @Column({ nullable: true })
  city: string;

  @Column({ type: 'int', nullable: false })
  showtimeCount: number;
}
