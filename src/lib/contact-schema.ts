import { z } from "zod";

export const budgetOptions = [
  "Not sure yet",
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
] as const;

export const contactSchema = z.object({
  type: z.enum(["contact", "quote"]).default("contact"),
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(150),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+\d\s().-]*$/, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(20, "Please tell us a bit more (at least 20 characters)").max(5000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept the privacy policy" }) }),
  // Honeypot: must stay empty (bots tend to fill every field)
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;
