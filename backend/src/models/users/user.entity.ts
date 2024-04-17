import { UserSchema } from 'src/common/utils/validation/users/user.schema';
import { z } from 'zod';

export type User = z.infer<typeof UserSchema>;
