import React from 'react';
import { Container } from '@/components/ui';

interface PageHeaderProps {
  title: string;
  description: string;
  heroImage: string;
}

export function PageHeader({ title, description, heroImage }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol Kolon - İçerik */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              {title}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Sağ Kolon - Görsel */}
          <div className="relative">
            <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
