import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';

import { SignUpController } from './controllers/signUp.controller';
import { SignUpService } from './services/signUp.service';

import { ProfileController } from './controllers/userProfile/profile.controller';
import { ProfileService } from './services/userProfile/profile.service';

@Module({
  imports: [],
  controllers: [AppController, SignUpController, ProfileController],
  providers: [AppService, SignUpService, ProfileService],
})
export class AppModule {}
