import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const blogDirectory = path.join(process.cwd(), "public/content/blog");

// ⬇ Fetch Markdown Blog Posts from /public/content/blog
function getBlogPosts() {
  const files = fs.readdirSync(blogDirectory);

  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(blogDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        id: filename.replace(".md", ""),
        ...data,
      };
    });

  // Sort newest → oldest
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export default function BlogPage() {
  const posts = getBlogPosts();

  if (posts.length === 0) {
    return (
      <>
        <Navigation />
        <main className="pt-16 lg:pt-20 text-center py-32">
          <h1 className="text-4xl font-bold">No Blog Posts Found</h1>
          <p className="text-muted-foreground mt-4">
            Add posts from /admin — Netlify CMS.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  const featured = posts[0];
  const recent = posts.slice(1);

  return (
    <>
      <Navigation />

      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1f3a]/5 via-background to-[#7F9DB1]/5">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thought leadership on technology,
              business, and innovation.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#1a1f3a]">
              Featured Article
            </h2>

            <Link href={`/blog/${featured.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-card border border-[#7F9DB1]/20 shadow-xl hover:shadow-2xl"
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a]/90 via-[#1a1f3a]/50 to-transparent" />

                <div className="absolute bottom-0 p-8 lg:p-12 text-white">
                  <div className="inline-block px-3 py-1 bg-[#7F9DB1] text-white text-sm font-medium rounded-full mb-4">
                    {featured.category}
                  </div>

                  <h3 className="text-3xl lg:text-5xl font-bold mb-4">
                    {featured.title}
                  </h3>

                  <p className="text-lg text-white/80 mb-6">{featured.excerpt}</p>

                  <div className="flex items-center gap-6 text-white/70 text-sm">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" /> {featured.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> {featured.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {featured.readTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#1a1f3a]">
              Recent Posts
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {recent.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="group bg-card rounded-2xl border border-[#7F9DB1]/20 overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40">
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <div className="p-6">
                        <div className="inline-block px-2 py-1 bg-[#7F9DB1]/10 text-[#7F9DB1] text-xs font-medium rounded-full mb-3">
                          {post.category}
                        </div>

                        <h3 className="text-xl font-bold mb-3 line-clamp-2 text-[#1a1f3a] group-hover:text-[#7F9DB1]">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <div className="flex items-center font-medium text-[#1a1f3a] group-hover:text-[#7F9DB1] group-hover:translate-x-2 transition-all">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
