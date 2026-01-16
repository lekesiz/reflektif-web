"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  AlertTriangle,
  Trophy,
  Clock,
} from "lucide-react";
import { Container, Card, Badge, Button } from "@/components/ui";

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
    type: "risk-taker" | "balanced" | "cautious";
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Mevcut işinizde memnun olmadığınızda genellikle ne yaparsınız?",
    options: [
      { text: "Hemen yeni iş aramaya başlarım", score: 3, type: "risk-taker" },
      { text: "Önce durumu iyileştirmeye çalışır, sonra değerlendiririm", score: 2, type: "balanced" },
      { text: "Güvenli bir alternatif bulana kadar sabrederim", score: 1, type: "cautious" },
    ],
  },
  {
    id: 2,
    text: "Size çok iyi bir maaş teklifi yapıldı ama şirket yeni ve belirsizlik var. Ne yaparsınız?",
    options: [
      { text: "Fırsatı değerlendiririm, risk almadan kazanç olmaz", score: 3, type: "risk-taker" },
      { text: "Şirketi araştırır, artı ve eksileri karşılaştırırım", score: 2, type: "balanced" },
      { text: "Güvenilir bir şirkette daha düşük maaşı tercih ederim", score: 1, type: "cautious" },
    ],
  },
  {
    id: 3,
    text: "Kariyer planlaması yaparken en önemli kriteriniz nedir?",
    options: [
      { text: "Hızlı yükselme ve büyüme fırsatları", score: 3, type: "risk-taker" },
      { text: "İş-yaşam dengesi ve kişisel gelişim", score: 2, type: "balanced" },
      { text: "İş güvencesi ve istikrar", score: 1, type: "cautious" },
    ],
  },
  {
    id: 4,
    text: "Kendi işinizi kurmayı hiç düşündünüz mü?",
    options: [
      { text: "Evet, aktif olarak planlıyorum", score: 3, type: "risk-taker" },
      { text: "Düşünüyorum ama önce daha fazla deneyim kazanmalıyım", score: 2, type: "balanced" },
      { text: "Hayır, düzenli gelir benim için daha önemli", score: 1, type: "cautious" },
    ],
  },
  {
    id: 5,
    text: "Tamamen farklı bir sektöre geçiş yapmak hakkında ne düşünürsünüz?",
    options: [
      { text: "Heyecan verici buluyorum, yeni başlangıçlar severim", score: 3, type: "risk-taker" },
      { text: "Doğru fırsat olursa değerlendiririm", score: 2, type: "balanced" },
      { text: "Mevcut alanımda uzmanlaşmayı tercih ederim", score: 1, type: "cautious" },
    ],
  },
  {
    id: 6,
    text: "Ekonomik belirsizlik dönemlerinde kariyer kararlarınızı nasıl alırsınız?",
    options: [
      { text: "Kriz dönemleri fırsat dönemleridir, cesur adımlar atarım", score: 3, type: "risk-taker" },
      { text: "Temkinli olurum ama tamamen durağan kalmam", score: 2, type: "balanced" },
      { text: "Güvenli limanda kalır, fırtına geçene kadar beklerim", score: 1, type: "cautious" },
    ],
  },
  {
    id: 7,
    text: "Bir yöneticilik pozisyonu teklif edildi ama daha fazla sorumluluk ve stres anlamına geliyor. Kararınız?",
    options: [
      { text: "Kesinlikle kabul ederim, büyüme şansını kaçırmam", score: 3, type: "risk-taker" },
      { text: "Detayları öğrenir, hazır olup olmadığımı değerlendiririm", score: 2, type: "balanced" },
      { text: "Mevcut konumumda rahatım, stresi artırmak istemem", score: 1, type: "cautious" },
    ],
  },
];

type Step = "info" | "quiz" | "result";

interface ResultProfile {
  type: "risk-taker" | "balanced" | "cautious";
  title: string;
  description: string;
  strengths: string[];
  watchOuts: string[];
  color: string;
  icon: React.ReactNode;
}

const resultProfiles: Record<string, ResultProfile> = {
  "risk-taker": {
    type: "risk-taker",
    title: "Cesur Karar Verici",
    description: "Yüksek risk toleransına sahipsiniz. Fırsatları değerlendirmekte hızlısınız ve değişimden korkmuyorsunuz. Girişimcilik ruhu taşıyorsunuz.",
    strengths: [
      "Hızlı karar alma yeteneği",
      "Fırsatları görebilme",
      "Değişime açıklık",
      "Girişimci ruh",
    ],
    watchOuts: [
      "Aceleci kararlar verme riski",
      "Finansal güvenliği göz ardı etme",
      "Detaylı analiz yapmadan hareket etme",
    ],
    color: "from-orange-500 to-red-500",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  balanced: {
    type: "balanced",
    title: "Dengeli Stratejist",
    description: "Risk ve güvenlik arasında sağlıklı bir denge kurabiliyorsunuz. Kararlarınızı verirken hem fırsatları hem de riskleri değerlendiriyorsunuz.",
    strengths: [
      "Analitik düşünme",
      "Dengeli değerlendirme",
      "Stratejik planlama",
      "Uyum sağlama",
    ],
    watchOuts: [
      "Karar sürecini uzatma eğilimi",
      "Mükemmel zamanlamayı bekleme",
      "Fırsatları kaçırma riski",
    ],
    color: "from-blue-500 to-purple-500",
    icon: <Target className="w-8 h-8" />,
  },
  cautious: {
    type: "cautious",
    title: "Temkinli Planlayıcı",
    description: "Güvenlik ve istikrar sizin için öncelikli. Kararlarınızı dikkatlice alır, riskleri minimize etmeye çalışırsınız.",
    strengths: [
      "Detaylı araştırma",
      "Risk yönetimi",
      "Uzun vadeli düşünme",
      "Finansal disiplin",
    ],
    watchOuts: [
      "Aşırı temkinli olma",
      "Fırsatları kaçırma",
      "Konfor alanında kalma",
    ],
    color: "from-green-500 to-teal-500",
    icon: <Shield className="w-8 h-8" />,
  },
};

export default function UcretsizTestPage() {
  const [step, setStep] = useState<Step>("info");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("quiz");
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, questions[currentQuestion].options[selectedOption].score];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setStep("result");
      }, 1500);
    }
  };

  const calculateResult = (): ResultProfile => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage >= 70) return resultProfiles["risk-taker"];
    if (percentage >= 40) return resultProfiles["balanced"];
    return resultProfiles["cautious"];
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-primary-50 py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/testler/kariyer-risk-analizi"
            className="inline-flex items-center text-neutral-600 hover:text-primary-600 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kariyer Risk Analizi
          </Link>
          <Badge variant="accent" className="mb-4">
            <Sparkles className="w-4 h-4 mr-1" />
            Ücretsiz Mini Test
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Kariyer Risk Profilinizi Keşfedin
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            7 soruluk bu kısa test ile kariyer kararlarındaki risk profilinizi öğrenin
          </p>
        </div>

        {/* Step: Info Collection */}
        {step === "info" && (
          <Card variant="elevated" className="max-w-xl mx-auto p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-accent-100 text-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                Teste Başlamadan Önce
              </h2>
              <p className="text-neutral-600">
                Sonuçlarınızı size ulaştırabilmemiz için lütfen bilgilerinizi girin
              </p>
            </div>

            <form onSubmit={handleInfoSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Adınız *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      required
                      value={userInfo.firstName}
                      onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      placeholder="Adınız"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Soyadınız *
                  </label>
                  <input
                    type="text"
                    required
                    value={userInfo.lastName}
                    onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                    placeholder="Soyadınız"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  E-posta Adresiniz *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="email"
                    required
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Telefon Numaranız *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="tel"
                    required
                    value={userInfo.phone}
                    onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="bg-neutral-50 rounded-xl p-4 text-sm text-neutral-600">
                <p>
                  Bilgileriniz gizli tutulacak ve sadece test sonuçlarınızı iletmek için kullanılacaktır.
                  <Link href="/kvkk" className="text-primary-600 hover:underline ml-1">
                    KVKK Aydınlatma Metni
                  </Link>
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Teste Başla
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center justify-center gap-6 text-sm text-neutral-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                ~3 dakika
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                7 soru
              </span>
              <span className="flex items-center gap-1">
                <Trophy className="w-4 h-4" />
                Anlık sonuç
              </span>
            </div>
          </Card>
        )}

        {/* Step: Quiz */}
        {step === "quiz" && (
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-neutral-600 mb-2">
                <span>Soru {currentQuestion + 1} / {questions.length}</span>
                <span>%{Math.round(progress)} tamamlandı</span>
              </div>
              <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-500 to-primary-500 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <Card variant="elevated" className="p-8">
              {!isSubmitting ? (
                <>
                  {/* Question */}
                  <div className="mb-8">
                    <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-xl font-bold">{currentQuestion + 1}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-neutral-900">
                      {questions[currentQuestion].text}
                    </h2>
                  </div>

                  {/* Options */}
                  <div className="space-y-3 mb-8">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(index)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                          selectedOption === index
                            ? "border-primary-500 bg-primary-50 shadow-md"
                            : "border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                              selectedOption === index
                                ? "border-primary-500 bg-primary-500"
                                : "border-neutral-300"
                            }`}
                          >
                            {selectedOption === index && (
                              <CheckCircle2 className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <span className={`font-medium ${selectedOption === index ? "text-primary-700" : "text-neutral-700"}`}>
                            {option.text}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Next Button */}
                  <Button
                    onClick={handleNextQuestion}
                    disabled={selectedOption === null}
                    className="w-full"
                    size="lg"
                  >
                    {currentQuestion < questions.length - 1 ? (
                      <>
                        Sonraki Soru
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    ) : (
                      <>
                        Sonuçları Gör
                        <Trophy className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-neutral-200" />
                    <div className="absolute inset-0 rounded-full border-4 border-primary-500 border-t-transparent animate-spin" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Sonuçlarınız Hesaplanıyor
                  </h3>
                  <p className="text-neutral-600">
                    Kariyer risk profiliniz analiz ediliyor...
                  </p>
                </div>
              )}
            </Card>
          </div>
        )}

        {/* Step: Result */}
        {step === "result" && (
          <div className="max-w-3xl mx-auto">
            {(() => {
              const result = calculateResult();
              return (
                <>
                  {/* Result Card */}
                  <Card variant="elevated" className="overflow-hidden mb-8">
                    <div className={`bg-gradient-to-r ${result.color} p-8 text-white text-center`}>
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        {result.icon}
                      </div>
                      <Badge className="bg-white/20 text-white mb-3">
                        Kariyer Risk Profiliniz
                      </Badge>
                      <h2 className="text-3xl font-bold mb-2">{result.title}</h2>
                      <p className="text-lg opacity-90 max-w-lg mx-auto">
                        {result.description}
                      </p>
                    </div>

                    <div className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Strengths */}
                        <div>
                          <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 mb-4">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            Güçlü Yönleriniz
                          </h3>
                          <ul className="space-y-2">
                            {result.strengths.map((strength, index) => (
                              <li key={index} className="flex items-center gap-2 text-neutral-700">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Watch Outs */}
                        <div>
                          <h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 mb-4">
                            <AlertTriangle className="w-5 h-5 text-amber-500" />
                            Dikkat Etmeniz Gerekenler
                          </h3>
                          <ul className="space-y-2">
                            {result.watchOuts.map((watchOut, index) => (
                              <li key={index} className="flex items-center gap-2 text-neutral-700">
                                <span className="w-2 h-2 rounded-full bg-amber-500" />
                                {watchOut}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* CTA Section */}
                  <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200">
                    <div className="text-center">
                      <Badge variant="primary" className="mb-4">
                        <Sparkles className="w-4 h-4 mr-1" />
                        Detaylı Analiz
                      </Badge>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                        Tam Kariyer Risk Analizinizi Alın
                      </h3>
                      <p className="text-neutral-600 mb-6 max-w-lg mx-auto">
                        Bu mini test sadece bir başlangıç! Kapsamlı Kariyer Risk Analizi ile
                        40+ soru, detaylı rapor ve kişiselleştirilmiş öneriler alabilirsiniz.
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/iletisim">
                          <Button size="lg">
                            Detaylı Analiz İçin İletişime Geçin
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                        <Link href="/testler/kariyer-risk-analizi">
                          <Button variant="outline" size="lg">
                            Test Hakkında Bilgi Al
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>

                  {/* User Info Reminder */}
                  <div className="mt-6 text-center text-sm text-neutral-500">
                    <p>
                      Sonuçlarınız <strong>{userInfo.email}</strong> adresine gönderilecektir.
                    </p>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </Container>
    </div>
  );
}
