import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "../user/user.entity";
import { TripGroup } from "src/tripground/tripground.entity";

@Entity()
export class Membership {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => User, u => u.id)
  user: User;

  @ManyToOne(() => TripGroup, g => g.id)
  group: TripGroup;

  @Column({ default: 'member' })
  role: 'owner' | 'member';
}
