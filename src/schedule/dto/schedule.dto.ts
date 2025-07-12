// src/schedule/dto/create-schedule.dto.ts
export class CreateScheduleDto {
  startDate: string;
  endDate: string;
  tags: string[];
  people: number;
  relations: string[];
  request: string;
  scheduleData: Record<string, { time: string; desc: string }[]>;
}
