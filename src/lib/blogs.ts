import blogsData from "../../content/blogs.json"

export interface Blog {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  coverImage: string
  readTime: string
  category: string
  featured: boolean
  published: boolean
}

export function getAllBlogs(): Blog[] {
  return blogsData
    .filter(blog => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogsData.find(blog => blog.slug === slug && blog.published)
}

export function getFeaturedBlogs(): Blog[] {
  return blogsData
    .filter(blog => blog.published && blog.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}