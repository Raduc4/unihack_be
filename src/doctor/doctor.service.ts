import { Injectable } from '@nestjs/common';
import { DoctorRepository } from './repository/doctor.repository';
import { IDoctor } from './doctor.interface';
import { UserEntity } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(private readonly doctorRepository: DoctorRepository) {}
  async findMany() {
    return this.doctorRepository.findMany();
  }
  async create(user: IDoctor) {
    const userEntity = new UserEntity(user);
    return this.doctorRepository.createUser(userEntity);
  }
  async createMultiple(users: IDoctor[]) {
    return users.forEach((user) => {
      const userEntity = new UserEntity(user);
      this.doctorRepository.createUser(userEntity);
    });
  }
  async findOne(id: string) {
    return this.doctorRepository.findOne(id);
  }
}
