import { IEventEntity } from './interfaces/IEventEntity';
import { CreateEventService } from './services/create-event.service';
export declare class EventController {
    private readonly CreateEventService;
    constructor(CreateEventService: CreateEventService);
    create(event: IEventEntity): Promise<IEventEntity>;
}
