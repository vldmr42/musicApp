import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';

config();

@Module({
    imports: [MongooseModule.forRoot(process.env.MONGO), TrackModule],
})
export class AppModule {}
