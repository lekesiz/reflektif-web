import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  BookOpen,
  FileText,
  Video,
  Download,
} from "lucide-react";
import { Container, Card, Badge, NewsletterForm } from "@/components/ui";
import { blogPosts, blogCategories, getFeaturedPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Kaynaklar | Blog ve İçerikler | Reflektif",
  description:
    "İşe alım, değerlendirme, İK teknolojisi ve kariyer gelişimi hakkında uzman içerikleri. Blog yazıları, rehberler ve araştırma raporları.",
};

export default function KaynaklarPage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = blogPosts;

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="primary" className="mb-4">
              Blog ve Kaynaklar
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              İK ve İşe Alım{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Bilgi Merkezi
              </span>
            </h1>
            <p className="text-xl text-neutral-600">
              Uzman içerikler, sektör araştırmaları ve en iyi uygulamalar.
              İK dünyasındaki son gelişmeleri takip edin.
            </p>
          </div>
        </Container>
      </section>

      {/* Resource Types */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <BookOpen className="w-5 h-5" />, label: "Blog Yazıları", count: "50+" },
              { icon: <FileText className="w-5 h-5" />, label: "Rehberler", count: "15+" },
              { icon: <Video className="w-5 h-5" />, label: "Webinarlar", count: "20+" },
              { icon: <Download className="w-5 h-5" />, label: "E-Kitaplar", count: "10+" },
            ].map((item, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  {item.icon}
                </div>
                <h3 className="font-medium text-neutral-900">{item.label}</h3>
                <p className="text-sm text-neutral-500">{item.count}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-neutral-900">Öne Çıkan Yazılar</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Featured */}
            {featuredPosts[0] && (
              <div className="lg:col-span-2">
                <Link href={`/kaynaklar/blog/${featuredPosts[0].slug}`}>
                  <Card variant="elevated" hover className="h-full group">
                    <div className="aspect-video bg-gradient-to-br from-primary-500 to-secondary-500 rounded-t-xl" />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="primary" size="sm">
                          {featuredPosts[0].category}
                        </Badge>
                        <span className="text-sm text-neutral-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPosts[0].readingTime} dk
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {featuredPosts[0].title}
                      </h3>
                      <p className="text-neutral-600 mb-4">{featuredPosts[0].excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold">
                            {featuredPosts[0].author.name.charAt(0)}
                          </div>
                          <span className="text-sm text-neutral-600">
                            {featuredPosts[0].author.name}
                          </span>
                        </div>
                        <span className="text-sm text-neutral-500 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPosts[0].publishedAt).toLocaleDateString("tr-TR")}
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            )}

            {/* Side Featured */}
            <div className="space-y-4">
              {featuredPosts.slice(1, 4).map((post) => (
                <Link key={post.id} href={`/kaynaklar/blog/${post.slug}`}>
                  <Card variant="bordered" hover className="group">
                    <div className="p-4 flex gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-lg shrink-0" />
                      <div className="flex-1 min-w-0">
                        <Badge variant="outline" size="sm" className="mb-2">
                          {post.category}
                        </Badge>
                        <h4 className="font-medium text-neutral-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-neutral-500 mt-1">
                          {post.readingTime} dk
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Kategoriler</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {blogCategories.map((category) => (
              <Card key={category.id} hover className="p-6 text-center h-full group cursor-pointer">
                <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-neutral-500">{category.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Recent Posts */}
      <section className="py-16">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-neutral-900">Son Yazılar</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/kaynaklar/blog/${post.slug}`}>
                <Card variant="bordered" hover className="h-full group">
                  <div className="aspect-video bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-t-xl" />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" size="sm">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-neutral-500">{post.readingTime} dk</span>
                    </div>
                    <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white text-center relative">
            <h2 className="text-3xl font-bold mb-4">
              İK Bültenine Abone Olun
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              En son içerikler, sektör trendleri ve Reflektif güncellemelerini
              doğrudan e-posta kutunuza alın.
            </p>
            <NewsletterForm />
          </div>
        </Container>
      </section>

      {/* Popular Tags */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Popüler Etiketler</h2>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag) => (
              <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary-50">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
