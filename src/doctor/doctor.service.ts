import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DoctorRepository } from './repository/doctor.repository';

@Injectable()
export class DoctorService {
  constructor(
    private prisma: PrismaService,
    private readonly doctorRepository: DoctorRepository,
  ) {}
  async findMany() {
    return this.doctorRepository.findMany();
  }
}
