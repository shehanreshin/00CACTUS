import { UserRole } from '../constants/user-role.const';
import { UserStatus } from '../constants/user-status.const';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
}
