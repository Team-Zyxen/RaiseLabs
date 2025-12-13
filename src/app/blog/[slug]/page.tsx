import { getBlogPost, getAllBlogSlugs } from "@/lib/blog"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Calendar, User } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: "Post Not Found"
    }
  }

  return {
    title: `${post.title} - Raise Lab Equipment`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : []
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-24 pb-12">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.image && (
            <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </time>
              </div>
              
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              )}
            </div>
            
            {post.category && (
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {post.category}
              </span>
            )}
          </header>
          
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
