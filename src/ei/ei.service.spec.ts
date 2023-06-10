import { Test, TestingModule } from '@nestjs/testing';
import { EiService } from './ei.service';

describe('EiService', () => {
  let service: EiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EiService],
    }).compile();

    service = module.get<EiService>(EiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
