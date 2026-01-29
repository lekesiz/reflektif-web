"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserPlus, ClipboardList, FileText, ArrowRight } from "lucide-react";
import { Container, Button } from "@/components/ui";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Kayıt Ol",
    description: "Ücretsiz hesap oluştur ve profilini tamamla. Sadece 2 dakika sürer.",
    image: "/images/illustrations/student-learning.jpg",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Testleri Tamamla",
    description: "Kişilik, yetenek ve ilgi alanı testlerini tamamla. AI motorumuz seni analiz ediyor.",
    image: "/images/illustrations/career-development.jpg",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
  },
  {
    number: "03",
    icon: FileText,
    title: "Sonuçları Al",
    description: "Detaylı rapor ve kişiselleştirilmiş meslek önerilerini hemen gör.",
    image: "/images/dashboards/hr-dashboard.png",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
];

export function HowItWorksEnhanced() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              Nasıl Çalışır?
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6"
          >
            3 Basit Adımda{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Kariyerini Keşfet
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Reflektif ile kariyerini planlamak hiç bu kadar kolay olmamıştı. Hemen başla, 15 dakikada sonuçlarını gör.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative">
                  {/* Step Number */}
                  <div className="absolute -left-4 -top-4 text-8xl font-black text-neutral-100 select-none">
                    {step.number}
                  </div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {index === 0 && (
                        <>
                          <li className="flex items-center text-neutral-700">
                            <div className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
                            E-posta ile hızlı kayıt
                          </li>
                          <li className="flex items-center text-neutral-700">
                            <div className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
                            Güvenli veri saklama
                          </li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li className="flex items-center text-neutral-700">
                            <div className="w-2 h-2 rounded-full bg-purple-500 mr-3" />
                            Bilimsel temelli testler
                          </li>
                          <li className="flex items-center text-neutral-700">
                            <div className="w-2 h-2 rounded-full bg-purple-500 mr-3" />
                            AI destekli analiz
                          </li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li className="flex items-center text-neutral-700">
                            <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                            Detaylı kariyer raporu
                          </li>
                          <li className="flex items-center text-neutral-700">
                            <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                            Kişiselleştirilmiş öneriler
                          </li>
                        </>
                      )}
                    </ul>

                    {/* CTA for last step */}
                    {index === 2 && (
                      <Link href="/kayit">
                        <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                          Hemen Başla
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Background Decoration */}
                  <div className={`absolute inset-0 ${step.bgColor} rounded-3xl transform rotate-3`} />
                  
                  {/* Image Container */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent`} />
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute -bottom-4 -right-4 px-6 py-3 bg-gradient-to-br ${step.color} text-white rounded-2xl shadow-2xl font-bold`}
                  >
                    Adım {step.number}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl border border-primary-100">
            <p className="text-lg text-neutral-700 mb-4">
              <span className="font-bold text-primary-600">50,000+</span> kullanıcı kariyerini Reflektif ile keşfetti
            </p>
            <Link href="/kayit">
              <Button size="xl" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Sen de Başla - Ücretsiz
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
