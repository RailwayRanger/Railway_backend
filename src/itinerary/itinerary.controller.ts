import { Controller, Post, Body } from '@nestjs/common';
import { ItineraryService } from './itinerary.service';

@Controller('api/itinerary')
export class ItineraryController {
    constructor(private readonly itineraryService: ItineraryService) { }

    @Post('generate')
    async generateItinerary(@Body() body: any) {
        const result = await this.itineraryService.generate(body);
        return result;
    }
}