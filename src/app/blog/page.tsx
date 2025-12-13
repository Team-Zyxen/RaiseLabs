import { getAllBlogPosts } from "@/lib/blog"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Raise Lab Equipment",
  description: "Insights, tutorials, and thought leadership on laboratory equipment and pharmaceutical testing."
}

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0]
  const recentPosts = blogPosts.filter(post => post.slug !== featuredPost?.slug)

  if (!blogPosts.length) {
    return (
      <>
        <Navigation />
        <main className="pt-16 lg:pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">No Blog Posts Yet</h1>
            <p className="text-muted-foreground">Check back soon for updates!</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-16 lg:pt-20">
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1f3a]/5 via-background to-[#7F9DB1]/5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights, tutorials, and thought leadership on laboratory equipment and pharmaceutical testing.
              </p>
            </div>
          </div>
        </section>

        {featuredPost && (
          <section className="py-12 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-[#1a1f3a]">Featured Article</h2>
                <p className="text-muted-foreground">Our latest and most popular post</p>
              </div>

              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="group relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-card border border-[#7F9DB1]/20 shadow-xl hover:shadow-2xl hover:border-[#7F9DB1]/40 transition-all">
                  {featuredPost.image && (
                    <div className="relative w-full h-full">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a]/90 via-[#1a1f3a]/50 to-transparent" />
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    {featuredPost.category && (
                      <div className="inline-block px-3 py-1 bg-[#7F9DB1] text-white text-sm font-medium rounded-full mb-4">
                        {featuredPost.category}
                      </div>
                    )}
                    <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-lg text-white/80 mb-6 max-w-3xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-white/70 text-sm">
                      {featuredPost.author && (
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {recentPosts.length > 0 && (
          <section className="py-12 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-[#1a1f3a]">Recent Posts</h2>
                <p className="text-muted-foreground">Stay updated with our latest articles</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {recentPosts.map((post) => (
                  <div key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                      <div className="group h-full bg-card rounded-2xl overflow-hidden border border-[#7F9DB1]/20 shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40 transition-all hover:-translate-y-2">
                        {post.image && (
                          <div className="relative w-full h-48">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        )}

                        <div className="p-6">
                          {post.category && (
                            <div className="inline-block px-2 py-1 bg-[#7F9DB1]/10 text-[#7F9DB1] text-xs font-medium rounded-full mb-3">
                              {post.category}
                            </div>
                          )}
                          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#7F9DB1] transition-colors text-[#1a1f3a]">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                            {post.author && (
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {post.author}
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex items-center text-[#1a1f3a] font-medium group-hover:translate-x-2 group-hover:text-[#7F9DB1] transition-all">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
