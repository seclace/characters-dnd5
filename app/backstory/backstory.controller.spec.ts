import { Test, TestingModule } from '@nestjs/testing';
import { BackstoryController } from './backstory.controller';

describe('BackstoryController', () => {
  let controller: BackstoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BackstoryController],
    }).compile();

    controller = module.get<BackstoryController>(BackstoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
