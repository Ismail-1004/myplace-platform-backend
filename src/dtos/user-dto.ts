import { IUser } from "../types/global";

export default class UserDto {
  id;
  name;
  phone;
  password;
  role;
  avatar;

  constructor(model: IUser) {
    if (model.id === undefined) {
      throw new Error("User ID is undefined");
    }

    this.name = model.name;
    this.id = model.id;
    this.phone = model.phone;
    this.password = model.password
    this.role = model.role
    this.avatar = model.avatar
  }
}
