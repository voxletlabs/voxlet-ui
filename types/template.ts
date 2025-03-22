export interface Template {
  slug: string
  name: string
  title: string
  supportLine: string
  description: string
  type: "paid" | "free"
  price?: string
  images: string[]
  creator: {
    name: string
    avatar: string
    url: string
  }
  categories: string[]
  pages: string[]
  usage: string
  features: {
    title: string,
    description: string
  }[]
  techStack: string[]
  releaseDate: string
  license?: {
    type: string;
    termsUrl?: string;
  };
  previewUrl: string
  paymentLink?: string
  githubUrl?: string
}
