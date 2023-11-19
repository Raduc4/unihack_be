import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { IDoctor } from './doctor.interface';

@Controller('doctors')
export class UserController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  async get_all_doctors() {
    return this.doctorService.findMany();
  }

  @Post()
  async createDoctor(@Body() doctor: IDoctor) {
    return this.doctorService.create(doctor);
  }

  @Post('/multiple')
  async createMultipleDoctors(@Body() doctors: IDoctor[]) {
    console.log(doctors);
    return this.doctorService.createMultiple(doctors);
  }

  @Get()
  async getDoctorsByFilter(@Query() filters) {
    console.log(filters);
    return this.doctorService.getSpecificDoctors(filters);
  }

  @Get('/:id')
  async getDoctor(@Param('id') id: string) {
    console.log(id);
    return this.doctorService.findOne(id);
  }
}
