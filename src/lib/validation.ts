import { z } from "zod";

/**
 * İletişim formu validation schema
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "İsim en az 2 karakter olmalıdır")
    .max(100, "İsim en fazla 100 karakter olabilir")
    .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/, "İsim sadece harf içerebilir"),
  email: z
    .string()
    .email("Geçersiz e-posta adresi")
    .max(255, "E-posta en fazla 255 karakter olabilir"),
  phone: z
    .string()
    .regex(/^[0-9\s\-\+\(\)]+$/, "Geçersiz telefon numarası")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(200, "Şirket adı en fazla 200 karakter olabilir")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(5, "Konu en az 5 karakter olmalıdır")
    .max(200, "Konu en fazla 200 karakter olabilir"),
  message: z
    .string()
    .min(10, "Mesaj en az 10 karakter olmalıdır")
    .max(5000, "Mesaj en fazla 5000 karakter olabilir"),
  type: z.enum(["genel", "demo", "destek", "satis"], {
    errorMap: () => ({ message: "Geçersiz mesaj tipi" }),
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Kayıt formu validation schema
 */
export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "İsim en az 2 karakter olmalıdır")
    .max(100, "İsim en fazla 100 karakter olabilir"),
  email: z
    .string()
    .email("Geçersiz e-posta adresi")
    .max(255, "E-posta en fazla 255 karakter olabilir"),
  phone: z
    .string()
    .regex(/^[0-9\s\-\+\(\)]+$/, "Geçersiz telefon numarası")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .max(200, "Şirket adı en fazla 200 karakter olabilir")
    .optional()
    .or(z.literal("")),
  userType: z.enum(["ogrenci", "universite", "profesyonel", "kurum"], {
    errorMap: () => ({ message: "Geçersiz kullanıcı tipi" }),
  }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

/**
 * Lead formu validation schema
 */
export const leadSchema = z.object({
  name: z
    .string()
    .min(2, "İsim en az 2 karakter olmalıdır")
    .max(100, "İsim en fazla 100 karakter olabilir"),
  email: z
    .string()
    .email("Geçersiz e-posta adresi")
    .max(255, "E-posta en fazla 255 karakter olabilir"),
  phone: z
    .string()
    .regex(/^[0-9\s\-\+\(\)]+$/, "Geçersiz telefon numarası")
    .optional()
    .or(z.literal("")),
  source: z
    .string()
    .max(100, "Kaynak en fazla 100 karakter olabilir")
    .optional()
    .or(z.literal("")),
});

export type LeadFormData = z.infer<typeof leadSchema>;

/**
 * Ücretsiz test sonucu validation schema
 */
export const freeTestResultSchema = z.object({
  email: z
    .string()
    .email("Geçersiz e-posta adresi")
    .max(255, "E-posta en fazla 255 karakter olabilir"),
  testType: z.enum(["kişilik", "yetenek", "ilgi", "deger"], {
    errorMap: () => ({ message: "Geçersiz test tipi" }),
  }),
  answers: z.record(z.string(), z.any()).optional(),
});

export type FreeTestResultData = z.infer<typeof freeTestResultSchema>;
