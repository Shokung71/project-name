import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      name: "Bancha Wasanasitthi",
      id: 66106030,
    };
  }
}
