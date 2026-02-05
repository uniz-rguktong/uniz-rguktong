import { z } from 'zod';
import { UserRole } from './roles.enum';

export const JwtPayloadSchema = z.object({
  id: z.string().uuid().optional(), // In legacy this might be username, but moving to UUID
  username: z.string(),
  role: z.nativeEnum(UserRole).or(z.string()), // Allow string initially for flexibility during migration
  iat: z.number().optional(),
  exp: z.number().optional(),
});

export type JwtPayload = z.infer<typeof JwtPayloadSchema>;
