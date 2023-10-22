import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

console.log(process.env.MONGO);
@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb://mongo:DxRjlM6TMDRfTjgwCqJ7@containers-us-west-87.railway.app:7113',
        ),
        TrackModule,
    ],
})
export class AppModule {}
