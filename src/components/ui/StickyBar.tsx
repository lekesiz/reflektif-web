"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { Button, Input } from "@/components/ui";

interface StickyBarProps {
  position?: "top" | "bottom";
  delay?: number;
  cookieName?: string;
  dismissDays?: number;
}

export function StickyBar({
  position = "bottom",
  delay = 3000,
  cookieName = "reflektif_sticky_bar",
  dismissDays = 3,
}: StickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const shouldShow = () => {
    if (typeof window === "undefined") return false;
    const dismissed = localStorage.getItem(cookieName);
    if (dismissed) {
      const dismissedDate = new Date(dismissed);
      const now = new Date();
      const daysSinceDismissed = Math.floor(
        (now.getTime() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      return daysSinceDismissed >= dismissDays;
    }
    return true;
  };

  const dismiss = () => {
    setIsVisible(false);
    localStorage.setItem(cookieName, new Date().toISOString());
  };

  useEffect(() => {
    if (!shouldShow()) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => dismiss(), 2000);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed left-0 right-0 z-40 transform transition-transform duration-500 ${
        position === "top" ? "top-0" : "bottom-0"
      } ${isVisible ? "translate-y-0" : position === "top" ? "-translate-y-full" : "translate-y-full"}`}
    >
      <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Content */}
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 animate-pulse hidden sm:block" />
            <p className="text-sm sm:text-base font-medium text-center sm:text-left">
              {isSubmitted
                ? "Teşekkürler! En kısa sürede iletişime geçeceğiz."
                : "Sınırlı süre: İlk 100 kullanıcıya 3 ay ücretsiz!"}
            </p>
          </div>

          {/* Right Content */}
          {!isSubmitted && (
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 rounded-lg text-neutral-900 text-sm w-48 sm:w-64 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button
                type="submit"
                size="sm"
                className="bg-white text-primary-600 hover:bg-neutral-100 whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? "..." : "Başla"}
                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-1" />}
              </Button>
            </form>
          )}

          {/* Close Button */}
          <button
            onClick={dismiss}
            className="absolute right-2 top-1/2 -translate-y-1/2 sm:relative sm:right-auto sm:top-auto sm:translate-y-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
