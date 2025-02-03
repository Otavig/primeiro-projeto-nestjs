import { EventDocument } from "../Schema/event.schema";
import { Model } from "mongoose";
import { IEventEntity } from "../interfaces/IEventEntity";
export declare class CreateEventRepositorie {
    private eventModel;
    constructor(eventModel: Model<EventDocument>);
    execute(event: IEventEntity): Promise<IEventEntity>;
}
