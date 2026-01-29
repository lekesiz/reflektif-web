import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container, Card, CardContent, Button, Badge } from "@/components/ui";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Reflektif Blog",
  description: "Kariyer, yetenek yönetimi, yapay zeka ve daha fazlası hakkında en son makaleler ve içgörüler.",
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-24 bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <Container className="relative">
          <div className="text-center">
            <Badge variant="secondary" size="lg" className="mb-4 bg-blue-100 text-blue-800">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Reflektif Blog
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Kariyer, yetenek yönetimi, yapay zeka ve daha fazlası hakkında en son makaleler ve içgörüler.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-neutral-500 mb-2">
                      {post.publishedAt} &middot; {post.author.name}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-neutral-900">
                      {post.title}
                    </h3>
                    <p className="text-neutral-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
