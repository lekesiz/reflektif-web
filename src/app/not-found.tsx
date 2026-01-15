"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Container size="sm">
        <div className="text-center">
          <div className="mb-8">
            <span className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              404
            </span>
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            Sayfa Bulunamadi
          </h1>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto">
            Aradiginiz sayfa tasinmis, silinmis veya hic var olmamis olabilir.
            Ana sayfaya donerek devam edebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button leftIcon={<Home className="w-4 h-4" />}>Ana Sayfa</Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Geri Don
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
