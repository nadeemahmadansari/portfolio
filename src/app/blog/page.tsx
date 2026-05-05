import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

export const metadata = {
  title: "Blog",
  description: "Insights on web development, design, and product engineering.",
};

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <div className="py-20 min-h-screen">
      <Container>
        <SectionHeader 
          title="Blog" 
          subtitle="Sharing my thoughts on technology, engineering, and digital products." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1} direction="up">
              <Link 
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="aspect-video bg-secondary flex items-center justify-center text-muted-foreground italic text-sm">
                  {/* Placeholder for cover image */}
                  Blog Post Image
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-primary">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  );
}
