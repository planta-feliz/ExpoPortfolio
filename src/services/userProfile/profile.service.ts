import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  index() {
    return { message: '🐪 . . . just the beginning' };
  }
}
