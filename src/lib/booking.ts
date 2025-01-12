import { z } from 'zod';
export const bookingSchema = z.object({
  service: z.enum(['ps5', 'ps4', 'pc', 'vr']),
  date: z.date(),
  time: z.string(),
  duration: z.number().min(1).max(12),
  name: z.string().min(2),
  phone: z.string().regex(/^\+7\d{10}$/),
  email: z.string().email(),
});
export type BookingFormData = z.infer<typeof bookingSchema>;
