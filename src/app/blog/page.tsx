"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const blogPosts = [
  {
    id: "1",
    title: "The Future of Enterprise Software Development",
    excerpt: "Explore emerging trends and technologies shaping the next generation of enterprise applications.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Technology"
  },
  {
    id: "2",
    title: "Building Scalable Cloud Infrastructure",
    excerpt: "Best practices for designing and implementing cloud solutions that grow with your business.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Cloud"
  },
  {
    id: "3",
    title: "AI-Powered Analytics: A Complete Guide",
    excerpt: "Learn how artificial intelligence is transforming data analytics and business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "AI & Analytics"
  },
  {
    id: "4",
    title: "Cybersecurity Best Practices for 2024",
    excerpt: "Essential security measures every organization should implement to protect their digital assets.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    author: "David Kim",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Security"
  },
  {
    id: "5",
    title: "The Art of DevOps Automation",
    excerpt: "Streamline your development workflow with modern automation tools and methodologies.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80",
    author: "Alex Thompson",
    date: "March 5, 2024",
    readTime: "9 min read",
    category: "DevOps"
  },
  {
    id: "6",
    title: "Marketing Automation Success Stories",
    excerpt: "Real-world examples of companies achieving exceptional results with marketing automation.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
    author: "Jessica Lee",
    date: "March 3, 2024",
    readTime: "5 min read",
    category: "Marketing"
  }
]

export default function BlogPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1f3a]/5 via-background to-[#7F9DB1]/5">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                Our Blog
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights, tutorials, and thought leadership on technology, business, and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-[#1a1f3a]">Featured Article</h2>
              <p className="text-muted-foreground">Our latest and most popular post</p>
            </motion.div>

            <Link href={`/blog/${blogPosts[0].id}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-card border border-[#7F9DB1]/20 shadow-xl hover:shadow-2xl hover:border-[#7F9DB1]/40"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a]/90 via-[#1a1f3a]/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="inline-block px-3 py-1 bg-[#7F9DB1] text-white text-sm font-medium rounded-full mb-4">
                    {blogPosts[0].category}
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-lg text-white/80 mb-6 max-w-3xl">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-white/70 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {blogPosts[0].author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-[#1a1f3a]">Recent Posts</h2>
              <p className="text-muted-foreground">Stay updated with our latest articles</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="group h-full bg-card rounded-2xl overflow-hidden border border-[#7F9DB1]/20 shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-6">
                        <div className="inline-block px-2 py-1 bg-[#7F9DB1]/10 text-[#7F9DB1] text-xs font-medium rounded-full mb-3">
                          {post.category}
                        </div>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#7F9DB1] transition-colors text-[#1a1f3a]">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex items-center text-[#1a1f3a] font-medium group-hover:translate-x-2 group-hover:text-[#7F9DB1] transition-all">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}