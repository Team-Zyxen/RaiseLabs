"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, BookmarkPlus } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { use } from "react"

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80"
                alt="Blog post cover"
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
                  Technology
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  The Future of Enterprise Software Development
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span>Sarah Johnson</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>8 min read</span>
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
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-xl">
                    The landscape of enterprise software development is undergoing a revolutionary transformation. 
                    As we navigate through 2024, emerging technologies and methodologies are reshaping how organizations 
                    build, deploy, and maintain their digital infrastructure.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                    The Rise of AI-Powered Development
                  </h2>
                  <p>
                    Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development 
                    process. AI-powered code completion, automated testing, and intelligent debugging tools are dramatically 
                    improving developer productivity and code quality.
                  </p>
                  <p>
                    Modern development teams are leveraging machine learning models to predict potential bugs, suggest 
                    optimal architectures, and even generate boilerplate code. This shift allows developers to focus on 
                    solving complex business problems rather than repetitive tasks.
                  </p>

                  <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg my-8">
                    <p className="text-base italic mb-0">
                      "The future of software development lies not in replacing developers, but in augmenting their 
                      capabilities with intelligent tools that handle the mundane, allowing humans to focus on creativity 
                      and innovation." - Dr. James Chen, MIT Computer Science
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                    Cloud-Native Architecture
                  </h2>
                  <p>
                    The transition to cloud-native architectures continues to accelerate. Microservices, containerization, 
                    and serverless computing are becoming the default choices for new enterprise applications. These 
                    architectural patterns offer unprecedented scalability, resilience, and flexibility.
                  </p>
                  <p>
                    Kubernetes has emerged as the de facto standard for container orchestration, while serverless platforms 
                    enable developers to build applications without managing infrastructure. This shift reduces operational 
                    overhead and allows teams to iterate faster.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                    The DevOps Evolution
                  </h2>
                  <p>
                    DevOps practices have matured significantly, with GitOps and platform engineering emerging as the next 
                    evolution. Organizations are building internal developer platforms that abstract away complexity and 
                    provide self-service capabilities for development teams.
                  </p>
                  <p>
                    Continuous integration and deployment pipelines have become more sophisticated, incorporating advanced 
                    security scanning, automated rollbacks, and progressive delivery techniques like canary deployments 
                    and feature flags.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                    Security by Design
                  </h2>
                  <p>
                    With cyber threats becoming more sophisticated, security can no longer be an afterthought. The shift-left 
                    security movement emphasizes integrating security practices early in the development lifecycle.
                  </p>
                  <p>
                    Modern development teams are adopting security scanning tools, implementing zero-trust architectures, 
                    and following secure coding practices from day one. This proactive approach significantly reduces 
                    vulnerabilities and compliance risks.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                    Conclusion
                  </h2>
                  <p>
                    The future of enterprise software development is exciting and full of opportunities. By embracing 
                    AI-powered tools, cloud-native architectures, mature DevOps practices, and security-first mindsets, 
                    organizations can build software that is more reliable, scalable, and secure than ever before.
                  </p>
                  <p>
                    Success in this new era requires continuous learning, adaptation, and a willingness to experiment with 
                    emerging technologies. The organizations that thrive will be those that can balance innovation with 
                    pragmatism, adopting new tools and practices that genuinely improve their development processes.
                  </p>
                </div>
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
                    SJ
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                    <p className="text-muted-foreground mb-4">
                      Senior Software Architect with over 15 years of experience in enterprise software development. 
                      Passionate about cloud technologies, DevOps, and building scalable systems.
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