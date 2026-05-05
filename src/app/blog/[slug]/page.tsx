import { getPostData, getSortedPostsData } from "@/lib/blog";
import { Container } from "@/components/container";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  
  try {
    const post = await getPostData(slug);

    return (
      <article className="py-20 min-h-screen">
        <Container>
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          <header className="max-w-3xl mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <div 
                  key={tag} 
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-medium"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </div>
              ))}
            </div>
          </header>

          <div className="aspect-video w-full rounded-3xl bg-secondary mb-16 flex items-center justify-center text-muted-foreground italic">
            {/* Cover Image Placeholder */}
            Hero Image
          </div>

          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:underline max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </Container>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
