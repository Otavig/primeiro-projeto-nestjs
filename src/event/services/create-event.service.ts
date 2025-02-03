import { name } from './../../../node_modules/ci-info/index.d';
import { Injectable } from "@nestjs/common";
import { CreateEventRepositorie } from "../repositories/create-event-repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class CreateEventService {
    constructor(
        private readonly createEventRepository : CreateEventRepositorie
    ) {}

    async execute(event: IEventEntity): Promise<IEventEntity> {

        let newEvent = await this.createEventRepository.execute(event);
        return newEvent
    }
}