import { Test, TestingModule } from '@nestjs/testing';
import { BackstoryService } from './backstory.service';

describe('BackstoryService', () => {
  let service: BackstoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackstoryService],
    }).compile();

    service = module.get<BackstoryService>(BackstoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
