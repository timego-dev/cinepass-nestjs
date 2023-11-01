import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'showtime', orderBy: { id: 'ASC' } })
//TODO: add index if necessary
export class ShowtimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: false, unique: true })
  showtimeId: string;

  @Column({ nullable: false })
  cinemaName: string;

  @Column({ nullable: false })
  movieTitle: string;

  @Column({ type: 'timestamptz', nullable: false })
  showtimeInUTC: Date;

  @Column({ nullable: false })
  bookingLink: string;

  @Column('varchar', { array: true, nullable: true })
  attributes: string[];

  @Column({ nullable: true, default: null })
  city: string;
}
