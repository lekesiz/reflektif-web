"use client";

import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { customers, companyStats } from "@/data/customers";

export function Customers() {
  return (
    <section className="py-16 border-y border-neutral-100">
      <Container>
        <div className="text-center mb-10">
          <p className="text-neutral-500 mb-2">
            {companyStats.totalCompanies} kurumsal müşteri tarafından tercih ediliyor
          </p>
        </div>

        {/* Customer Logos Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-10">
          {customers.slice(0, 12).map((customer, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-neutral-500" />
                </div>
                <span className="text-xs text-neutral-600 font-medium text-center">
                  {customer.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/referanslar">
            <Button variant="ghost" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Tüm Referansları Gör
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
