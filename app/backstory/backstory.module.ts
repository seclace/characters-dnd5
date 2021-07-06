import { Module } from '@nestjs/common';

import { BackstoryService } from './backstory.service';
import { BackstoryController } from './backstory.controller';
import { backstoryRepoProvider, getBackstoriesProvider } from './backstory.providers';

@Module({
  providers: [
    BackstoryService,
    backstoryRepoProvider,
    getBackstoriesProvider,
  ],
  controllers: [BackstoryController],
  exports: [
    backstoryRepoProvider,
    getBackstoriesProvider,
  ],
})
export class BackstoryModule {}
