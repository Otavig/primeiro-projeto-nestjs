import { IEventEntity } from './interfaces/IEventEntity';
import { CreateEventService } from './services/create-event.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('event')
export class EventController {
    constructor(
        private readonly CreateEventService : CreateEventService
    ) {}
    // event/create
    @Post('create')
    async create(@Body() event: IEventEntity): Promise<IEventEntity>{
        return this.CreateEventService.execute(event);
    }

}
