import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/schedule.dto';


@Controller('schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) { }

    @Post()
    create(@Body() createScheduleDto: CreateScheduleDto) {
        return this.scheduleService.create(createScheduleDto);
    }

    @Get('user/:userId')
    getUserSchedules(@Param('userId') userId: string) {
        return this.scheduleService.getSchedulesByUserId(userId);
    }

    @Delete('schedule/:id')
    async deleteSchedule(@Param('id') id: string) {
        return this.scheduleService.deleteById(id);
    }
}