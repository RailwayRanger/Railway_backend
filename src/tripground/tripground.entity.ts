import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class TripGroup {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true })
  code: string;  // 예: 'AB12CD34'

  @Column() title: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'ownerId' })
  owner: User;
}
