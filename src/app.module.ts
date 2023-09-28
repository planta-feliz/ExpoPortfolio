import { Module, NestModule, MiddlewareConsumer  } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { ProfileService } from './services/userProfile/profile.service';
import { ProfileController } from './controllers/userProfile/profile.controller';

@Module({
  imports: [],
  controllers: [AppController, ProfileController],
  providers: [AppService, ProfileService],
})
export class AppModule {}
