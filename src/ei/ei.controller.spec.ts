import { Test, TestingModule } from '@nestjs/testing';
import { EiController } from './ei.controller';
import { EiService } from './ei.service';

describe('EiController', () => {
  let controller: EiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EiController],
      providers: [EiService],
    }).compile();

    controller = module.get<EiController>(EiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
