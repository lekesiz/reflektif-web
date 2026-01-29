import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, Badge } from "@/components/ui";
import { blogPosts } from "@/data/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return {};
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-24 bg-white">
      <Container className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {post.title}
          </h1>
          <div className="text-sm text-neutral-500">
            {post.publishedAt} &middot; {post.author.name}
          </div>
        </div>
        <div className="relative h-96 mb-12">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-3xl"
          />
        </div>
        <div
          className="prose lg:prose-xl max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </div>
  );
}
