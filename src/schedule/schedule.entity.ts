// src/schedule/entities/schedule.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column('simple-array') // 문자열 배열 저장
  tags: string[];

  @Column()
  people: number;

  @Column('simple-array')
  relations: string[];

  @Column()
  request: string;

  @Column('json')
  scheduleData: any; // day별 일정들 (Map<String, List<{ time, desc }>>)
}
