"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { getCategoryById, getProductsByCategory } from "@/lib/data"
import { notFound } from "next/navigation"
import { use } from "react"

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const category = getCategoryById(id)
  const products = getProductsByCategory(id)

  if (!category) {
    notFound()
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-16 lg:pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Link href="/products">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-muted-foreground hover:text-[#1a1f3a] transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Categories
            </motion.div>
          </Link>
        </div>

        {/* Category Header */}
        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-block px-3 py-1 bg-[#7F9DB1]/10 text-[#7F9DB1] text-sm font-medium rounded-full mb-4 border border-[#7F9DB1]/20">
                {products.length} Products
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                {category.name}
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                {category.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-20 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/products/${product.id}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="group relative h-[480px] rounded-2xl overflow-hidden bg-card border border-[#7F9DB1]/20 shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40 flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative w-full h-[280px] flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={`${product.title} - ${product.description}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold mb-2 line-clamp-2 text-[#1a1f3a]">
                          {product.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                          {product.description}
                        </p>
                        <div className="flex items-center font-medium group-hover:translate-x-2 transition-transform mt-auto text-[#7F9DB1] group-hover:text-[#1a1f3a]">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Empty state */}
            {products.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-xl text-muted-foreground">
                  No products found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}