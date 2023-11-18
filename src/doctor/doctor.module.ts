import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { UserController } from './doctor.controller';
import { DoctorRepository } from './repository/doctor.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  providers: [DoctorService, DoctorRepository, JwtService],
  controllers: [UserController],
  exports: [DoctorRepository, DoctorService],
})
export class UserModule {}
