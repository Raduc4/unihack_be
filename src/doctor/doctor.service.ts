import { Injectable } from '@nestjs/common';
import { DoctorRepository } from './repository/doctor.repository';
import { IDoctor } from './doctor.interface';
import { UserEntity } from './entities/doctor.entity';
import { SpecificDoctorsFiltersDTO } from './dto/SpecificDoctors.dto';

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

  async getSpecificDoctors(filters: SpecificDoctorsFiltersDTO) {
    return this.doctorRepository.getSpecificDoctors(filters);
  }
}
