import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../entities/doctor.entity';
@Injectable()
export class DoctorRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly config: ConfigService,
  ) {}
  public async createUser(user: UserEntity) {
    const newUser = this.prismaService.doctors.create({
      data: {
        username: user.username,
        email: user.email,
        phone: user.phone,
        doctorType: user.doctorType,
      },
    });
    return newUser;
  }

  async findOne(id: string) {
    return this.prismaService.doctors.findUnique({ where: { id } });
  }
  async findUserByEmail(email: string) {
    const user = await this.prismaService.doctors.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return user;
    }
  }

  async findOneByPhone(phone: string) {
    return this.prismaService.doctors.findUnique({ where: { phone } });
  }

  async findMany() {
    return this.prismaService.doctors.findMany();
  }

  async findUserById(id: string) {
    const user = await this.prismaService.doctors.findUnique({
      where: {
        id,
      },
    });
    if (user) {
      return user;
    }
  }
}
