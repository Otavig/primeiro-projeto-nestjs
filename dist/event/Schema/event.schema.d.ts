import { Document, HydratedDocument } from 'mongoose';
export type EventDocument = HydratedDocument<Event>;
export declare class Event extends Document {
    name: string;
    data: Date;
    hour: number;
    description: string;
    value: number;
}
export declare const EventSchema: import("mongoose").Schema<Event, import("mongoose").Model<Event, any, any, any, Document<unknown, any, Event> & Event & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Event, Document<unknown, {}, import("mongoose").FlatRecord<Event>> & import("mongoose").FlatRecord<Event> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
