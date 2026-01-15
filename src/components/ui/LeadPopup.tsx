"use client";

import { useState, useEffect } from "react";
import { X, Gift, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button, Input } from "@/components/ui";

interface LeadPopupProps {
  /** Delay in milliseconds before showing the popup */
  delay?: number;
  /** Show popup when user tries to exit (mouse leaves viewport) */
  exitIntent?: boolean;
  /** Show popup after scrolling X percent of page */
  scrollTrigger?: number;
  /** Cookie name to track if popup was shown/dismissed */
  cookieName?: string;
  /** Days before showing popup again after dismissal */
  dismissDays?: number;
}

export function LeadPopup({
  delay = 5000,
  exitIntent = true,
  scrollTrigger = 50,
  cookieName = "reflektif_lead_popup",
  dismissDays = 7,
}: LeadPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
  });

  // Check if popup should be shown (not dismissed recently)
  const shouldShowPopup = () => {
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

  // Dismiss popup and save to localStorage
  const dismissPopup = () => {
    setIsOpen(false);
    localStorage.setItem(cookieName, new Date().toISOString());
  };

  // Time-based trigger
  useEffect(() => {
    if (!shouldShowPopup()) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Exit intent trigger
  useEffect(() => {
    if (!exitIntent || !shouldShowPopup()) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [exitIntent]);

  // Scroll trigger
  useEffect(() => {
    if (!scrollTrigger || !shouldShowPopup()) return;

    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPercent >= scrollTrigger) {
        setIsOpen(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollTrigger]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Close popup after success message
    setTimeout(() => {
      dismissPopup();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={dismissPopup}
      />

      {/* Popup Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full pointer-events-auto animate-slide-up overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={dismissPopup}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4 text-neutral-600" />
          </button>

          {/* Header Gradient */}
          <div className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Gift className="w-5 h-5" />
              </div>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Ücretsiz Demo ve Deneme Hakkı!
            </h2>
            <p className="opacity-90">
              Reflektif&apos;in tüm özelliklerini 14 gün boyunca ücretsiz deneyin.
            </p>
          </div>

          {/* Content */}
          <div className="p-6">
            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Teşekkürler!
                </h3>
                <p className="text-neutral-600">
                  En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <>
                {/* Benefits */}
                <div className="mb-6 space-y-2">
                  {[
                    "14 gün ücretsiz deneme",
                    "Kredi kartı gerekmez",
                    "Tüm özelliklere erişim",
                    "Kişiselleştirilmiş demo",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Ad Soyad"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Adınız Soyadınız"
                    required
                  />
                  <Input
                    label="İş E-postası"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="ornek@sirket.com"
                    required
                  />
                  <Input
                    label="Şirket (Opsiyonel)"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Şirket Adı"
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Gönderiliyor..."
                    ) : (
                      <>
                        Ücretsiz Başla
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Privacy Note */}
                <p className="text-xs text-neutral-500 text-center mt-4">
                  Bilgileriniz güvende. Spam göndermiyoruz.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
