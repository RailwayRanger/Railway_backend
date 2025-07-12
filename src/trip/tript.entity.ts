import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { TripGroup } from "src/tripground/tripground.entity";

@Entity()
export class Trip {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => TripGroup, g => g.id)
  group: TripGroup;

  @Column() title: string;
  @Column({ type: 'date' }) startDate: string;
  @Column({ type: 'date' }) endDate: string;

  // LLM이 생성한 상세 일정을 JSON으로 통째 저장하거나
  // Day/Item 엔티티로 더 쪼갤 수도 있음
  @Column({ type: 'longtext' }) planJson: string;
}
