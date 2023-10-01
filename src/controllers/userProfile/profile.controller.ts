import { Controller, Render, Get } from '@nestjs/common';
import { ProfileService } from '../../services/userProfile/profile.service';

@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('/user')
  @Render('profile.hbs')
  getHello() {
    return this.profileService.index();
  }
}
