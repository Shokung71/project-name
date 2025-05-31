import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ทำอะไร แม่ดูอยู่นะ 😘';
  }
}
