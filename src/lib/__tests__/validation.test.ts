import { describe, it, expect } from 'vitest';
import { contactSchema, registerSchema, leadSchema, freeTestResultSchema } from '../validation';

describe('Validation Schemas', () => {
  describe('contactSchema', () => {
    it('validates correct contact form data', () => {
      const validData = {
        name: 'Ahmet Yılmaz',
        email: 'ahmet@example.com',
        phone: '05551234567',
        company: 'Test Şirketi',
        subject: 'Demo talebi',
        message: 'Merhaba, demo talep ediyorum.',
        type: 'demo' as const,
      };

      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('rejects invalid email', () => {
      const invalidData = {
        name: 'Ahmet Yılmaz',
        email: 'invalid-email',
        subject: 'Test',
        message: 'Test mesajı',
        type: 'genel' as const,
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('email');
      }
    });

    it('rejects short name', () => {
      const invalidData = {
        name: 'A',
        email: 'test@example.com',
        subject: 'Test',
        message: 'Test mesajı',
        type: 'genel' as const,
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects invalid phone number', () => {
      const invalidData = {
        name: 'Ahmet Yılmaz',
        email: 'test@example.com',
        phone: 'abc123',
        subject: 'Test',
        message: 'Test mesajı',
        type: 'genel' as const,
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects short message', () => {
      const invalidData = {
        name: 'Ahmet Yılmaz',
        email: 'test@example.com',
        subject: 'Test',
        message: 'Kısa',
        type: 'genel' as const,
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('rejects invalid type', () => {
      const invalidData = {
        name: 'Ahmet Yılmaz',
        email: 'test@example.com',
        subject: 'Test',
        message: 'Test mesajı',
        type: 'invalid' as any,
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('registerSchema', () => {
    it('validates correct registration data', () => {
      const validData = {
        name: 'Mehmet Demir',
        email: 'mehmet@example.com',
        phone: '05551234567',
        company: 'ABC Ltd.',
        userType: 'profesyonel' as const,
      };

      const result = registerSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('accepts optional fields', () => {
      const validData = {
        name: 'Ayşe Kaya',
        email: 'ayse@example.com',
        userType: 'ogrenci' as const,
      };

      const result = registerSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('leadSchema', () => {
    it('validates correct lead data', () => {
      const validData = {
        name: 'Zeynep Şahin',
        email: 'zeynep@example.com',
        phone: '05559876543',
        source: 'Google Ads',
      };

      const result = leadSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('freeTestResultSchema', () => {
    it('validates correct test result data', () => {
      const validData = {
        email: 'test@example.com',
        testType: 'kişilik' as const,
      };

      const result = freeTestResultSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('rejects invalid test type', () => {
      const invalidData = {
        email: 'test@example.com',
        testType: 'invalid' as any,
      };

      const result = freeTestResultSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
});
