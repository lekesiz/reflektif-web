"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { CheckCircle, Loader2 } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("E-posta adresi gerekli");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "newsletter",
          name: "Bülten Abonesi",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
      } else {
        setError("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <CheckCircle className="w-6 h-6" />
        </div>
        <p className="text-lg font-medium">Aboneliğiniz alındı!</p>
        <p className="text-sm opacity-80">En kısa sürede sizinle iletişime geçeceğiz.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-posta adresiniz"
        className="flex-1 px-4 py-3 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-white"
        disabled={isLoading}
      />
      <Button
        type="submit"
        className="bg-white text-neutral-900 hover:bg-neutral-100"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Gönderiliyor
          </>
        ) : (
          "Abone Ol"
        )}
      </Button>
      {error && (
        <p className="text-sm text-red-200 mt-2 absolute bottom-4 left-1/2 -translate-x-1/2">{error}</p>
      )}
    </form>
  );
}
