import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
} from "lucide-react";
import { Container, Card, Badge, Button } from "@/components/ui";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Yazı Bulunamadı | Reflektif",
    };
  }

  return {
    title: `${post.title} | Reflektif Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts from same category
  const relatedPosts = blogPosts
    .filter((p) => p.category.id === post.category.id && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <Container size="md">
          <Link
            href="/kaynaklar"
            className="inline-flex items-center text-neutral-600 hover:text-primary-600 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tüm Yazılar
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="primary">{post.category.name}</Badge>
            <span className="text-neutral-500 flex items-center gap-1 text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="text-neutral-500 flex items-center gap-1 text-sm">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-neutral-600 mb-8">{post.excerpt}</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-neutral-900">{post.author.name}</p>
              <p className="text-sm text-neutral-500">{post.author.role}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <Container size="md">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl mb-8" />

              {/* Article Content */}
              <article className="prose prose-lg max-w-none prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-a:text-primary-600 prose-strong:text-neutral-900">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .replace(/## /g, "<h2>")
                      .replace(/### /g, "<h3>")
                      .replace(/\n\n/g, "</p><p>")
                      .replace(/<h2>/g, "</p><h2>")
                      .replace(/<h3>/g, "</p><h3>")
                      .replace(/<\/h2>/g, "</h2><p>")
                      .replace(/<\/h3>/g, "</h3><p>"),
                  }}
                />
              </article>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-4">Etiketler</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <h4 className="font-semibold text-neutral-900 mb-4">Paylaş</h4>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <Card className="p-6">
                  <h4 className="font-semibold text-neutral-900 mb-4">Yazar Hakkında</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{post.author.name}</p>
                      <p className="text-sm text-neutral-500">{post.author.role}</p>
                    </div>
                  </div>
                </Card>

                {/* CTA Card */}
                <Card className="p-6 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                  <h4 className="font-semibold mb-2">Demo Talep Edin</h4>
                  <p className="text-sm opacity-90 mb-4">
                    Reflektif'in tüm özelliklerini keşfedin.
                  </p>
                  <Link href="/iletisim">
                    <Button className="w-full bg-white text-neutral-900 hover:bg-neutral-100">
                      Ücretsiz Demo
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <Container>
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">
              İlgili Yazılar
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/kaynaklar/blog/${relatedPost.slug}`}>
                  <Card variant="bordered" hover className="h-full group">
                    <div className="aspect-video bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-t-xl" />
                    <div className="p-5">
                      <Badge variant="outline" size="sm" className="mb-3">
                        {relatedPost.category.name}
                      </Badge>
                      <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center text-sm text-primary-600 font-medium">
                        Devamını Oku
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
