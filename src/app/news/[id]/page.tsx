"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Share2 } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { use } from "react"

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  return (
    <>
      <Navigation />
      
      <main className="pt-16 lg:pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Link href="/news">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to News
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
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80"
                alt="News cover"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* News Content */}
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
                  Product Launch
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Elegance Launches Revolutionary AI Platform
                </h1>
                
                <div className="flex items-center gap-6 text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>March 18, 2024</span>
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </motion.div>

              {/* News Body */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-xl font-semibold text-foreground">
                    Today marks a significant milestone as we unveil our most ambitious product yet—an AI-powered 
                    platform that revolutionizes how enterprises leverage artificial intelligence.
                  </p>

                  <p>
                    After three years of intensive research and development, we're proud to introduce a solution that 
                    combines cutting-edge machine learning capabilities with enterprise-grade reliability and security. 
                    This platform represents the culmination of feedback from thousands of customers and hundreds of 
                    enterprise deployments.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                    Key Features and Capabilities
                  </h2>
                  <p>
                    Our new AI platform offers unprecedented capabilities that set it apart from existing solutions in 
                    the market:
                  </p>
                  <ul className="space-y-2">
                    <li>Advanced natural language processing with 98% accuracy</li>
                    <li>Real-time predictive analytics across multiple data sources</li>
                    <li>Automated workflow optimization using reinforcement learning</li>
                    <li>Enterprise-grade security with end-to-end encryption</li>
                    <li>Seamless integration with existing business systems</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                    Industry Impact
                  </h2>
                  <p>
                    Early adopters have already reported remarkable results. Beta customers have seen an average 40% 
                    increase in operational efficiency and a 60% reduction in manual processing time. These improvements 
                    translate directly to cost savings and enhanced customer satisfaction.
                  </p>

                  <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                    <p className="text-base italic mb-0 text-foreground">
                      "This platform has transformed how we approach data analysis and decision-making. What used to 
                      take days now happens in minutes, and the accuracy is phenomenal." 
                      <br />
                      <span className="font-semibold">- Michelle Roberts, CTO at TechCorp</span>
                    </p>
                  </div>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                    Availability and Pricing
                  </h2>
                  <p>
                    The platform is available immediately for enterprise customers, with a flexible pricing model 
                    designed to scale with your organization. We're offering a 30-day free trial for qualified 
                    businesses, along with comprehensive onboarding and training support.
                  </p>

                  <p>
                    Our team of AI specialists will work directly with early adopters to ensure successful implementation 
                    and maximum value realization. This includes custom model training, integration support, and ongoing 
                    optimization.
                  </p>

                  <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">
                    Looking Ahead
                  </h2>
                  <p>
                    This launch is just the beginning. Our product roadmap includes exciting enhancements such as 
                    multi-modal AI capabilities, advanced computer vision features, and expanded industry-specific 
                    models. We're committed to continuous innovation and delivering value to our customers.
                  </p>

                  <p>
                    For more information about our new AI platform or to schedule a demo, please contact our sales team 
                    or visit our product page.
                  </p>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 p-8 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-2xl border border-border text-center"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Interested in Learning More?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact our team to schedule a personalized demo and see how our AI platform can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">Schedule Demo</Button>
                  <Button size="lg" variant="outline">Download Brochure</Button>
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