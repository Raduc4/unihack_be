import { IDoctor } from '../doctor.interface';

export class UserEntity implements IDoctor {
  _id?: string;
  username: string;
  phone: string;
  email: string;
  doctorType: string;

  constructor(user: IDoctor) {
    this._id = user._id;
    this.username = user.username;
    this.email = user.email;
    this.phone = user.phone;
    this.doctorType = user.doctorType;
  }
}
