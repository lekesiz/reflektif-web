import React from 'react';

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {title}
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
