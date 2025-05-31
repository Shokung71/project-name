import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
  // any คือการใช้ type ที่ไม่ระบุประเภทที่แน่นอน
  // // ใช้เมื่อไม่ต้องการระบุประเภทที่แน่นอนของข้อมูลที่ส่งกลับ
    // คืนค่าเป็นอ็อบเจ็กต์ที่มีชื่อและรหัสประจำตัว
    return {
      name: "Bancha Wasanasitthi",
      id: 66106030,
    };
  }
}
