import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { UserController } from './doctor.controller';
import { UserRepository } from './repository/doctor.repository';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  providers: [DoctorService, UserRepository, JwtService],
  controllers: [UserController],
  exports: [UserRepository, DoctorService],
})
export class UserModule {}
