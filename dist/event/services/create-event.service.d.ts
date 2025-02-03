import { CreateEventRepositorie } from "../repositories/create-event-repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";
export declare class CreateEventService {
    private readonly createEventRepository;
    constructor(createEventRepository: CreateEventRepositorie);
    execute(event: IEventEntity): Promise<IEventEntity>;
}
