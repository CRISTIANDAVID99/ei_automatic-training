import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainModule } from './train/train.module';
import { EiModule } from './ei/ei.module';

@Module({
  imports: [TrainModule, ConfigModule.forRoot(), EiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
