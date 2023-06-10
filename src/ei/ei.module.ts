import { Module } from '@nestjs/common';
import { EiService } from './ei.service';
import { EiController } from './ei.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [EiController],
  providers: [EiService],
})
export class EiModule {}
