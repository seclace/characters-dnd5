import { Module } from '@nestjs/common';

import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { classesRepoProvider, getClassesProvider } from './class.providers';

@Module({
  controllers: [ClassController],
  providers: [
    ClassService,
    classesRepoProvider,
    getClassesProvider,
  ],
  exports: [
    classesRepoProvider,
    getClassesProvider,
  ],
})
export class ClassModule {}
