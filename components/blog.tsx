import { Calendar, User, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'Market Insights: Digital Asset Treasuries Start Strong in 2026',
    excerpt: 'Analyzing emerging opportunities in cryptocurrency and digital investments for long-term portfolio growth.',
    category: 'Market Analysis',
    date: 'Jan 30, 2026',
    author: 'Sonali Gupta',
    readTime: '8 min read',
    link: "https://aminagroup.com/research/digital-asset-treasuries-start-strong-in-2026/",
    image: 'https://aminagroup.com/wp-content/uploads/2026/01/Bitcoin-treasury-CMM-1600x900-1.jpg'
  },
  {
    title: 'Private Equity Fundamentals for New Investors',
    excerpt: 'Essential principles and strategies for understanding private equity investment opportunities and risks.',
    category: 'Investment Education',
    date: 'Apr 30, 2025',
    author: 'Troy Segal',
    readTime: '15 min read',
    link: "https://www.investopedia.com/articles/financial-careers/09/private-equity.asp",
    image: "https://www.investopedia.com/thmb/A_D_EhNfDiFn8hGFEjPMKccgULA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term-Definitions_Private-equity-673345d975244a9894e68d9b072a7969.png",
  },
  {
    title: 'Building a Diversified Investment Portfolio',
    excerpt: 'A comprehensive guide to portfolio construction, asset allocation, and risk management techniques.',
    category: 'Strategy',
    date: 'Mar 24, 2026',
    author: 'Barclay Palmer',
    readTime: '12 min read',
    link: "https://www.investopedia.com/articles/03/072303.asp",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUA212jyz6a4LUqX2Zq_HE22ZkUnnBYuciy6cXG66G3lrVPOrkANitHe-&s=10",
  },
  {
    title: 'Real Estate Investment Trends and Opportunities',
    excerpt: 'Exploring emerging real estate markets and land banking strategies for long-term wealth creation.',
    category: 'Real Estate',
    date: 'Jun 07, 2026',
    author: 'Shobhit Seth',
    readTime: '9 min read',
    link: "https://www.investopedia.com/articles/investing/110614/most-important-factors-investing-real-estate.asp",
    image: "https://www.investopedia.com/thmb/aMs6ydDf5UM3ncCbuGwfdd2ax6w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/most-important-factors-investing-real-estate.asp-ADD-FINALjpg-32950329a30d4500b6d7e0fd0ba95189.jpg",
  },
  {
    title: 'Risk Management in Volatile Markets',
    excerpt: 'Practical strategies to protect your portfolio and capitalize on market volatility.',
    category: 'Risk Management',
    date: 'Mar 31, 2025',
    author: 'Will Kenton',
    readTime: '11 min read',
    link: "https://www.investopedia.com/terms/r/riskmanagement.asp",
    image: "https://www.investopedia.com/thmb/Jg2FAofTPS6QlaKkUeBHgIgyHXU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/risk-management-4189908-FINAL-2-976ae194e01848618ca94941ab9d2395.jpg",
  },
  {
    title: 'Global Currency Markets: A Guide to Forex Investing',
    excerpt: 'Understanding macroeconomic trends and currency trading opportunities for international investors.',
    category: 'Forex',
    date: 'Apr 23, 2026',
    author: 'James Chen',
    readTime: '10 min read',
    link: "https://www.investopedia.com/terms/f/foreign-exchange.asp",
    image: "https://www.investopedia.com/thmb/dcrqAfbXR7YYJUQ2BVVM08ZCOcU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Forex_Final_4196203-e44848b06f2642378b12bc162951a818.png",
  },
]

const categoryColors: { [key: string]: string } = {
  'Market Analysis': 'bg-navy text-white',
  'Investment Education': 'bg-gold text-navy',
  'Strategy': 'bg-emerald text-white',
  'Real Estate': 'bg-navy text-white',
  'Risk Management': 'bg-gold text-navy',
  'Forex': 'bg-emerald text-white',
}

export function Blog() {
  return (
    <section id="blog" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
            Investment Insights & Updates
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Expert market analysis, investment strategies, and financial education to help you make informed decisions.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="bg-light-gray rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col"
            >
              {/* Placeholder Image */}
              <div className="w-full h-48 bg-linear-to-br from-navy to-gold  transition-opacity overflow-hidden">
                <Image src={post.image} className='w-full' alt='post image' width={300} height={200} />
              </div>

              <div className="p-6 flex flex-col grow">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      categoryColors[post.category] || 'bg-gray-300 text-navy'
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-700 mb-4 grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>

                {/* Read More Link */}
                <Link href={post.link} target='_blank' className="mt-4 flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors group/link">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link href='https://www.investopedia.com/investing-4427685' target='_blank' className="px-8 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-[#0a1830] transition-colors inline-flex items-center gap-2 group">
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
