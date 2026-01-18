import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Rate limiter için Redis bağlantısı
// Not: UPSTASH_REDIS_REST_URL ve UPSTASH_REDIS_REST_TOKEN environment variables gerekli
let redis: Redis | null = null;
let ratelimit: Ratelimit | null = null;

// Redis bağlantısını başlat
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  // Rate limiter: 10 istek / 10 saniye
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, "10 s"),
    analytics: true,
  });
}

/**
 * Rate limiting kontrolü yapar
 * @param identifier - IP adresi veya kullanıcı kimliği
 * @returns {success: boolean, limit: number, remaining: number, reset: number}
 */
export async function checkRateLimit(identifier: string) {
  // Eğer Redis yapılandırılmamışsa, rate limiting'i atla (development için)
  if (!ratelimit) {
    console.warn("Rate limiting is disabled. Configure UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.");
    return { success: true, limit: 0, remaining: 0, reset: 0 };
  }

  try {
    const result = await ratelimit.limit(identifier);
    return result;
  } catch (error) {
    console.error("Rate limit error:", error);
    // Hata durumunda rate limiting'i atla
    return { success: true, limit: 0, remaining: 0, reset: 0 };
  }
}

/**
 * Request'ten IP adresini al
 */
export function getClientIP(request: Request): string {
  // Vercel'de x-forwarded-for header'ından IP al
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  // x-real-ip header'ından IP al
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  // Fallback
  return "unknown";
}
