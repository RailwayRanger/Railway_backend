// src/schedule/schedule.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    startDate: string;

    @Column()
    endDate: string;

    @Column("simple-array")
    tags: string[];

    @Column()
    people: number;

    @Column("simple-array")
    relations: string[];

    @Column()
    request: string;

    @Column('json') // ✅ 이게 핵심! scheduleData를 JSON으로 저장하려면 꼭 필요
    scheduleData: Record<string, { time: string; desc: string }[]>;

    @Column({ nullable: true })
    userId: string | null; // 로그인 사용자는 ID, 게스트는 null
}
