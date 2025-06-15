
import type { User } from './user.interface';

export type AuthUser = Omit<User, 'password'>;