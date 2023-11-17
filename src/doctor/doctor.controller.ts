import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { UserId } from './decorators/userId.decorator';

@Controller('doctors')
export class UserController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  async get_all_doctors() {
    return this.doctorService.findMany();
  }
}
