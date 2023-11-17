export interface IUser {
  _id?: string;
  username: string;
  email: string;
  phone: string;
  doctorType: string;
  passwordHash?: string;
}
