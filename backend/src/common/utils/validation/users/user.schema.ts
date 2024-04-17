import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(['CUSTOMER', 'STAFF', 'ADMIN']),
  status: z.enum(['INACTIVE', 'ACTIVE', 'TEMP_DISABLED', 'PERM_DISABLED']),
});
