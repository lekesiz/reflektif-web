/**
 * Structured Data (Schema.org) JSON-LD generator
 * SEO için zengin snippet'ler oluşturur
 */

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint: {
    "@type": "ContactPoint";
    telephone: string;
    contactType: string;
    email: string;
    availableLanguage: string;
  };
  sameAs: string[];
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  potentialAction: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

export interface FAQPageSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export interface ProductSchema {
  "@context": "https://schema.org";
  "@type": "Product" | "SoftwareApplication";
  name: string;
  description: string;
  brand: {
    "@type": "Organization";
    name: string;
  };
  offers?: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
    availability: string;
  };
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: string;
    reviewCount: string;
  };
}

/**
 * Organization schema oluşturur
 */
export function getOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reflektif",
    url: "https://reflektif.net",
    logo: "https://reflektif.net/logo.png",
    description: "Türkiye'nin ilk AI destekli yetkinlik değerlendirme ve meslek eşleştirme platformu",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-507-43-43-253",
      contactType: "customer service",
      email: "info@reflektif.net",
      availableLanguage: "Turkish",
    },
    sameAs: [
      "https://www.linkedin.com/company/reflektif",
      "https://twitter.com/reflektif",
      "https://www.instagram.com/reflektif",
    ],
  };
}

/**
 * WebSite schema oluşturur
 */
export function getWebSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Reflektif",
    url: "https://reflektif.net",
    description: "AI destekli kariyer değerlendirme ve meslek eşleştirme platformu",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://reflektif.net/arama?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * FAQ schema oluşturur
 */
export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Product/Service schema oluşturur
 */
export function getProductSchema(product: {
  name: string;
  description: string;
  price?: string;
  currency?: string;
  rating?: { value: string; count: string };
}): ProductSchema {
  const schema: ProductSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Organization",
      name: "Reflektif",
    },
  };

  if (product.price && product.currency) {
    schema.offers = {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
      availability: "https://schema.org/InStock",
    };
  }

  if (product.rating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.rating.value,
      reviewCount: product.rating.count,
    };
  }

  return schema;
}

/**
 * JSON-LD script tag oluşturur
 */
export function generateJSONLD(schema: any): string {
  return JSON.stringify(schema, null, 2);
}
