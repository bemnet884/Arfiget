import { z } from 'zod';

export const freelancerSchema = z.object({
  name: z.string().min(3, 'Name should be at least 3 characters long'),
  email: z.string().email('Invalid email address'),
  skills: z.array(z.string()).min(1, 'Select at least one skill'),
  experience: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, 'Experience must be a valid number'),
  expectedRate: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, 'Rate must be a valid positive number'),
});

export const clientSchema = z.object({
  businessName: z.string().min(3, 'Business name should be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  projectDescription: z
    .string()
    .min(10, 'Project description should be at least 10 characters long'),
});
