import { Controller, Render, Get } from '@nestjs/common';
import { SignUpService } from '../services/signUp.service';

@Controller()
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Get('/signup')
  @Render('signUp.hbs')
  root() {
    return this.signUpService.index();
  }
}
