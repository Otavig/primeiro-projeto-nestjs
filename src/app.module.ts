import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(""), // Seu banco
    EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
