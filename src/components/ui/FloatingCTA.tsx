"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Phone, Mail, Calendar } from "lucide-react";
import { Button, Input, Textarea } from "@/components/ui";

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"message" | "call" | "demo">("message");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Show after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: "floating",
        }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up mb-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Size nasıl yardımcı olabiliriz?</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* Tabs */}
            <div className="flex gap-1 bg-white/10 rounded-lg p-1">
              {[
                { id: "message", icon: <Mail className="w-4 h-4" />, label: "Mesaj" },
                { id: "call", icon: <Phone className="w-4 h-4" />, label: "Ara" },
                { id: "demo", icon: <Calendar className="w-4 h-4" />, label: "Demo" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-white text-primary-600"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Send className="w-6 h-6" />
                </div>
                <p className="font-medium text-neutral-900">Mesajınız alındı!</p>
                <p className="text-sm text-neutral-500">En kısa sürede döneceğiz.</p>
              </div>
            ) : (
              <>
                {activeTab === "message" && (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      placeholder="Adınız"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                    <Input
                      type="email"
                      placeholder="E-posta"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                    <Textarea
                      placeholder="Mesajınız..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      required
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                    </Button>
                  </form>
                )}

                {activeTab === "call" && (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8" />
                    </div>
                    <p className="text-neutral-600 mb-4">Bizi hemen arayın</p>
                    <a
                      href="tel:+908501234567"
                      className="text-2xl font-bold text-primary-600 hover:underline"
                    >
                      0850 123 45 67
                    </a>
                    <p className="text-sm text-neutral-500 mt-2">
                      Pzt - Cuma, 09:00 - 18:00
                    </p>
                  </div>
                )}

                {activeTab === "demo" && (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      placeholder="Adınız"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                    <Input
                      type="email"
                      placeholder="İş E-postası"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Telefon"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Gönderiliyor..." : "Demo Talep Et"}
                    </Button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-neutral-800 rotate-90"
            : "bg-gradient-to-r from-primary-500 to-secondary-500 hover:shadow-xl hover:scale-110"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Pulse Animation */}
      {!isOpen && (
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      )}
    </div>
  );
}
