"use client"

import { motion } from "framer-motion"
import { Upload, Send, X } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function ServicePage() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      setSelectedFiles(prev => [...prev, ...filesArray])
    }
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    selectedFiles.forEach((file) => {
      formData.append('files', file)
    })
    
    // Form submission logic here
  }

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
                Service Request
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Need assistance with your Raise Lab equipment? Submit a service request and our expert team will get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Request Form */}
        <section className="py-12 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card p-8 lg:p-12 rounded-2xl border border-[#7F9DB1]/20 shadow-xl"
              >
                <form onSubmit={handleSubmit} className="space-y-6" name="service-request" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="service-request" />
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="border-[#7F9DB1]/30 focus:border-[#7F9DB1]"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                      className="border-[#7F9DB1]/30 focus:border-[#7F9DB1]"
                    />
                  </div>

                  {/* Product ID / Equipment Name */}
                  <div className="space-y-2">
                    <Label htmlFor="productId" className="text-base">Product ID / Equipment Name *</Label>
                    <Input
                      id="productId"
                      name="productId"
                      placeholder="e.g., RPHT-1P, Hardness Tester"
                      required
                      className="border-[#7F9DB1]/30 focus:border-[#7F9DB1]"
                    />
                    <p className="text-sm text-muted-foreground">
                      Enter the product model number or equipment name you need service for
                    </p>
                  </div>

                  {/* Query / Issue Description */}
                  <div className="space-y-2">
                    <Label htmlFor="query" className="text-base">Describe Your Query / Issue *</Label>
                    <Textarea
                      id="query"
                      name="query"
                      placeholder="Please provide detailed information about your service request, including any specific issues, error messages, or maintenance needs..."
                      rows={8}
                      required
                      className="border-[#7F9DB1]/30 focus:border-[#7F9DB1] resize-none"
                    />
                    <p className="text-sm text-muted-foreground">
                      Include as much detail as possible to help us assist you better
                    </p>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="fileUpload" className="text-base">Upload Images or Videos (Optional)</Label>
                    <div className="border-2 border-dashed border-[#7F9DB1]/30 rounded-xl p-6 hover:border-[#7F9DB1]/50 transition-colors">
                      <input
                        type="file"
                        id="fileUpload"
                        name="fileUpload"
                        multiple
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="fileUpload" className="cursor-pointer">
                        <div className="flex flex-col items-center text-center">
                          <div className="h-16 w-16 bg-[#7F9DB1]/10 rounded-full flex items-center justify-center mb-4">
                            <Upload className="h-8 w-8 text-[#7F9DB1]" />
                          </div>
                          <p className="text-base font-medium mb-1">Click to upload files</p>
                          <p className="text-sm text-muted-foreground">
                            Support for images (JPG, PNG) and videos (MP4, MOV)
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Maximum file size: 10MB per file
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* Selected Files Display */}
                    {selectedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium">Selected Files:</p>
                        {selectedFiles.map((file, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center justify-between p-3 bg-muted rounded-lg border border-[#7F9DB1]/20"
                          >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className="h-10 w-10 bg-[#7F9DB1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Upload className="h-5 w-5 text-[#7F9DB1]" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium truncate">{file.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="flex-shrink-0 ml-2 hover:bg-destructive/10 hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Additional Information */}
                  <div className="bg-[#7F9DB1]/5 border border-[#7F9DB1]/20 rounded-lg p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2 text-[#1a1f3a]">
                      <div className="h-2 w-2 bg-[#7F9DB1] rounded-full"></div>
                      What Happens Next?
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-[#7F9DB1] mt-1">•</span>
                        <span>Our technical support team will review your request within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#7F9DB1] mt-1">•</span>
                        <span>You'll receive an email confirmation with a ticket reference number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#7F9DB1] mt-1">•</span>
                        <span>A service engineer will contact you to discuss the next steps</span>
                      </li>
                    </ul>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-base bg-[#1a1f3a] hover:bg-[#1a1f3a]/90 text-white"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Service Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Need urgent assistance? Call us at <a href="tel:+919177770365" className="text-[#7F9DB1] hover:text-[#1a1f3a] font-medium">+91 9177770365</a>
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Support Information */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Our Service Commitment
              </h2>
              <p className="text-lg text-muted-foreground">
                Excellence in equipment service and support
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Expert Technical Support",
                  description: "Our certified engineers have extensive experience with all Raise Lab equipment",
                },
                {
                  title: "Fast Response Time",
                  description: "24-hour initial response guarantee for all service requests",
                },
                {
                  title: "Comprehensive Solutions",
                  description: "From routine maintenance to complex repairs and calibration services",
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-card p-8 rounded-2xl border border-[#7F9DB1]/20 shadow-lg hover:shadow-2xl hover:border-[#7F9DB1]/40 transition-all"
                >
                  <div className="h-12 w-12 bg-[#1a1f3a] rounded-xl flex items-center justify-center mb-6">
                    <div className="h-6 w-6 bg-[#7F9DB1] rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1a1f3a]">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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