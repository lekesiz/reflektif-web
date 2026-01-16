"use client";

import { useState } from "react";
import { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Building2,
  User,
  CheckCircle,
} from "lucide-react";
import {
  Container,
  Card,
  CardContent,
  Button,
  Badge,
  Input,
  Textarea,
} from "@/components/ui";

export default function IletisimPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    type: "individual",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          message: `[${formState.subject}] ${formState.message}`,
          source: "contact",
        }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24">
        <Container size="sm">
          <Card variant="bordered" padding="lg" className="text-center">
            <CardContent>
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-neutral-900 mb-4">
                Mesajiniz Alindi!
              </h1>
              <p className="text-neutral-600 mb-6">
                En kisa surede sizinle iletisime gececegiz. Genellikle 24 saat
                icinde geri donus yapiyoruz.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Yeni Mesaj Gonder
              </Button>
            </CardContent>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Iletisim
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Bizimle{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Iletisime Gecin
              </span>
            </h1>
            <p className="text-lg text-neutral-600">
              Sorulariniz, onerileriniz veya isbirligi teklifleri icin bize
              ulasin. En kisa surede geri donus yapacagiz.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info & Form */}
      <section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card variant="bordered">
                <CardContent>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@reflektif.net"
                        className="text-primary-600 hover:underline"
                      >
                        info@reflektif.net
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">
                        24 saat icinde geri donus
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Telefon
                      </h3>
                      <a
                        href="tel:+905074343253"
                        className="text-primary-600 hover:underline"
                      >
                        0507 43 43 253
                      </a>
                      <p className="text-sm text-neutral-500 mt-1">
                        Hafta ici 09:00 - 18:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardContent>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        Adres
                      </h3>
                      <p className="text-neutral-600">
                        Zaim Teknopark
                        <br />
                        Halkalı Cad. No: 2
                        <br />
                        Küçükçekmece, İstanbul
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="gradient">
                <CardContent>
                  <MessageSquare className="w-8 h-8 text-white mb-4" />
                  <h3 className="font-semibold text-white mb-2">
                    Canli Destek
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Aninda yardim icin canli destek hattimizi kullanin.
                  </p>
                  <Button variant="white" size="sm">
                    Sohbet Baslat
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card variant="bordered" padding="lg">
                <CardContent>
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">
                    Mesaj Gonderin
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* User Type */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-3">
                        Kimsiniz?
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: "individual", label: "Bireysel", icon: User },
                          { value: "corporate", label: "Kurumsal", icon: Building2 },
                          { value: "institution", label: "Egitim Kurumu", icon: MapPin },
                        ].map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() =>
                              setFormState((prev) => ({ ...prev, type: type.value }))
                            }
                            className={`p-4 rounded-xl border-2 transition-all ${
                              formState.type === type.value
                                ? "border-primary-500 bg-primary-50"
                                : "border-neutral-200 hover:border-neutral-300"
                            }`}
                          >
                            <type.icon
                              className={`w-6 h-6 mx-auto mb-2 ${
                                formState.type === type.value
                                  ? "text-primary-600"
                                  : "text-neutral-400"
                              }`}
                            />
                            <span
                              className={`text-sm font-medium ${
                                formState.type === type.value
                                  ? "text-primary-600"
                                  : "text-neutral-600"
                              }`}
                            >
                              {type.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Ad Soyad *"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Adiniz Soyadiniz"
                        required
                      />
                      <Input
                        label="Email *"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="ornek@email.com"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Telefon"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="0532 123 45 67"
                      />
                      {formState.type !== "individual" && (
                        <Input
                          label="Sirket/Kurum Adi"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Sirket veya kurum adiniz"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Konu *
                      </label>
                      <select
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full h-11 px-4 rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Konu secin</option>
                        <option value="demo">Demo Talebi</option>
                        <option value="pricing">Fiyatlandirma Bilgisi</option>
                        <option value="partnership">Isbirligi Teklifi</option>
                        <option value="support">Teknik Destek</option>
                        <option value="feedback">Geri Bildirim</option>
                        <option value="other">Diger</option>
                      </select>
                    </div>

                    <Textarea
                      label="Mesajiniz *"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Mesajinizi buraya yazin..."
                      rows={5}
                      required
                    />

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-neutral-500">
                        * Zorunlu alanlar
                      </p>
                      <Button
                        type="submit"
                        isLoading={isSubmitting}
                        rightIcon={<Send className="w-4 h-4" />}
                      >
                        Gonder
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="py-16">
        <Container>
          <div className="rounded-2xl overflow-hidden h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.5088977307584!2d28.79547731574676!3d41.01982097929859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5a0c8e5a5a1%3A0x1c0f5e5e5e5e5e5e!2sZaim%20Teknopark!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zaim Teknopark Konum"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
