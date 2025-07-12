export class CreateScheduleDto {
  userId?: string; // 선택값
  startDate: string;
  endDate: string;
  tags: string[];
  people: number;
  relations: string[];
  request: string;
  scheduleData: Record<string, { time: string; desc: string }[]>;
}
