"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, BookmarkPlus } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { use, useEffect, useState } from "react"
import { getBlogBySlug } from "@/lib/blogs"
import type { Blog } from "@/lib/blogs"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const [blog, setBlog] = useState<Blog | null>(null)

  useEffect(() => {
    const fetchedBlog = getBlogBySlug(slug)
    if (!fetchedBlog) {
      notFound()
    }
    setBlog(fetchedBlog)
  }, [slug])

  if (!blog) {
    return null
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-16 lg:pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Link href="/blog">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </motion.div>
          </Link>
        </div>

        {/* Hero Image */}
        <section className="pb-12">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-20 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                  {blog.category}
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  {blog.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <BookmarkPlus className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </motion.div>

              {/* Article Body */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <div 
                  className="space-y-6 text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </motion.div>

              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 p-8 bg-muted/30 rounded-2xl border border-border"
              >
                <div className="flex items-start gap-6">
                  <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold flex-shrink-0">
                    {blog.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{blog.author}</h3>
                    <p className="text-muted-foreground mb-4">
                      Author and contributor to RaiseLabs blog.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Follow</Button>
                      <Button variant="outline" size="sm">View Profile</Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}