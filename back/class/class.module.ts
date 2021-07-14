import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthenticationMiddleware } from '@app/common/middleware/authentication.middleware';

import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { classesRepoProvider, getClassesProvider } from './class.providers';

@Module({
  controllers: [ClassController],
  providers: [ClassService, classesRepoProvider, getClassesProvider],
  exports: [classesRepoProvider, getClassesProvider],
})
export class ClassModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware)
      .forRoutes(
        // { method: RequestMethod.GET, path: '/class' },
      )
  }
}
