// src/schedule/schedule.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from './schedule.entity';
import { Repository } from 'typeorm';
import { CreateScheduleDto } from './dto/schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepo: Repository<Schedule>,
  ) {}

  async create(dto: CreateScheduleDto) {
  const schedule = this.scheduleRepo.create({
    ...dto,
    userId: dto.userId ?? null,
  });
  return await this.scheduleRepo.save(schedule);
}
async getSchedulesByUserId(userId: string) {
  return await this.scheduleRepo.find({
    where: { userId },
    order: { startDate: 'ASC' }, // 옵션: 정렬
  });
}
}
