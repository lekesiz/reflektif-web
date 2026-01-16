import { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Building2,
  TrendingUp,
  Users,
  School,
  ArrowRight,
  Accessibility,
} from "lucide-react";
import { Container, Card, CardContent, Button, Badge } from "@/components/ui";
import { modules } from "@/data/modules";

export const metadata: Metadata = {
  title: "Moduller",
  description:
    "Reflektif platformunun tum modulleri. Ogrenci, universite, kariyer, IK ve kurumsal cozumler.",
};

const moduleIcons: Record<string, React.ElementType> = {
  GraduationCap,
  Building2,
  TrendingUp,
  Users,
  School,
  Accessibility,
};

export default function ModullerPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="text-center mb-16">
          <Badge variant="primary" size="lg" className="mb-4">
            6 Farkli Modul
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Her Ihtiyaca Uygun{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Cozumler
            </span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ogrenciden profesyonele, bireyden kuruma herkes icin ozel tasarlanmis
            yetkinlik degerlendirme modulleri.
          </p>
        </div>

        <div className="space-y-8">
          {modules.map((module, index) => {
            const Icon = moduleIcons[module.icon];
            const isEven = index % 2 === 0;

            return (
              <Card key={module.id} variant="bordered" padding="lg">
                <div
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary-600" />
                      </div>
                      <div>
                        <Badge variant="primary" size="sm">
                          {module.title}
                        </Badge>
                        <h2 className="text-2xl font-bold text-neutral-900">
                          {module.name}
                        </h2>
                      </div>
                    </div>

                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {module.longDescription}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {module.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature.title}
                          className="flex items-center text-sm text-neutral-700"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary-500 mr-2" />
                          {feature.title}
                        </div>
                      ))}
                    </div>

                    <Link href={`/moduller/${module.slug}`}>
                      <Button rightIcon={<ArrowRight className="w-4 h-4" />}>
                        {module.cta}
                      </Button>
                    </Link>
                  </div>

                  <div className={!isEven ? "lg:order-1" : ""}>
                    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                      <h3 className="font-semibold text-neutral-900 mb-4">
                        Hedef Kitle
                      </h3>
                      <ul className="space-y-2">
                        {module.targetAudience.map((audience) => (
                          <li
                            key={audience}
                            className="flex items-center text-neutral-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                            {audience}
                          </li>
                        ))}
                      </ul>

                      <h3 className="font-semibold text-neutral-900 mt-6 mb-4">
                        Avantajlar
                      </h3>
                      <ul className="space-y-2">
                        {module.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-center text-neutral-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-3" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
