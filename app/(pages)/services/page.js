'use client'
import Head from 'next/head';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

const services = [
  {
    name: 'Web Development',
    desc: 'We craft high-performance web applications tailored to your business needs, leveraging modern frameworks like Next.js and React for seamless user experiences, scalability, and robust functionality.',
    icon: '🧱',
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Next.js & React', 'Responsive Design', 'Performance Optimized']
  },
  {
    name: 'Mobile Development',
    desc: 'Our team builds cross-platform iOS and Android apps with tools like React Native and Flutter, ensuring offline capabilities, smooth performance, and integration with analytics and subscriptions.',
    icon: '📱',
    gradient: 'from-purple-500 to-pink-500',
    features: ['React Native', 'Flutter', 'Cross-Platform']
  },
  {
    name: 'AI Automation',
    desc: 'Transform your operations with AI-driven solutions, including LLM-powered agents, workflow automation, and CRM integrations, designed to boost efficiency and customer engagement.',
    icon: '🤖',
    gradient: 'from-emerald-500 to-teal-500',
    features: ['LLM Integration', 'Workflow Automation', 'CRM Integration']
  },
  {
    name: 'Digital Marketing',
    desc: 'Drive growth with strategic user acquisition, targeted campaigns, and advanced analytics to optimize ROI, ensuring your brand reaches the right audience effectively.',
    icon: '📣',
    gradient: 'from-orange-500 to-red-500',
    features: ['Campaign Strategy', 'Analytics', 'ROI Optimization']
  },
  {
    name: 'Graphic Design',
    desc: 'Create compelling brand identities and intuitive UI/UX systems with our design expertise, delivering visually stunning and user-centric solutions for web and mobile platforms.',
    icon: '🎨',
    gradient: 'from-violet-500 to-purple-500',
    features: ['Brand Identity', 'UI/UX Design', 'Visual Systems']
  },
  {
    name: 'SEO',
    desc: 'Elevate your online presence with technical SEO, content optimization, and data-driven strategies to improve search rankings and drive organic traffic to your site.',
    icon: '🔎',
    gradient: 'from-green-500 to-emerald-500',
    features: ['Technical SEO', 'Content Strategy', 'Analytics']
  },
  {
    name: 'Software Development',
    desc: 'Develop custom software platforms tailored to your unique requirements, from enterprise solutions to niche applications, built for reliability and scalability.',
    icon: '🧩',
    gradient: 'from-indigo-500 to-blue-500',
    features: ['Custom Solutions', 'Enterprise Grade', 'Scalable Architecture']
  },
  {
    name: 'Cloud Solutions',
    desc: 'Harness scalable cloud infrastructure with AWS, Azure, or Google Cloud, optimized for performance, security, and cost-efficiency to support your business growth.',
    icon: '☁️',
    gradient: 'from-sky-500 to-blue-500',
    features: ['AWS & Azure', 'Scalable Infrastructure', 'Security First']
  },
  {
    name: 'Data Analytics',
    desc: 'Unlock actionable insights with advanced data analytics, enabling data-driven decisions through custom dashboards, predictive modeling, and real-time reporting.',
    icon: '📊',
    gradient: 'from-yellow-500 to-orange-500',
    features: ['Custom Dashboards', 'Predictive Modeling', 'Real-time Reports']
  },
]

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Head>
        <title>Glass Inc | IT and Business Services - Web, Mobile, AI, and More</title>
        <meta
          name="description"
          content="Glass Inc offers expert IT and business services, including web development, mobile apps, AI automation, digital marketing, and more. Discover our comprehensive solutions for your business."
        />
        <meta
          name="keywords"
          content="web development, mobile development, AI automation, digital marketing, graphic design, SEO, software development, cloud solutions, data analytics, IT services, business solutions"
        />
        <meta name="author" content="Glass Inc" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en-US" />
        <link rel="canonical" href="https://glassinc.com/services" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Glass Inc | IT and Business Services" />
        <meta
          property="og:description"
          content="Expert IT and business services including web development, mobile apps, AI automation, digital marketing, graphic design, SEO, and more. Build your success with Glass Inc."
        />
        <meta property="og:url" content="https://glassinc.com/services" />
        <meta property="og:site_name" content="Glass Inc" />
        <meta property="og:image" content="https://glassinc.com/assets/glass-inc-services.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Glass Inc Services" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glass Inc | IT and Business Services" />
        <meta name="twitter:description" content="Comprehensive IT and business solutions, from web and mobile development to AI automation and digital marketing." />
        <meta name="twitter:image" content="https://glassinc.com/assets/glass-inc-services.jpg" />
        <meta name="twitter:image:alt" content="Glass Inc Services" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          <div className="container mx-auto px-6 py-24 md:py-32 relative">
            <div className="max-w-4xl">
              {/* New intro without typewriter */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                  Elite IT Solutions
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-slate-900 dark:text-white">
                  Your Business
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Digital Journey
                </span>
              </h1>
              
              <p className="mt-8 text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                Cutting-edge technology solutions designed to accelerate growth, enhance efficiency, 
                and deliver exceptional digital experiences that set your business apart.
              </p>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    150+
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Support Available</div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Start Your Project
                  <span className="ml-1">→</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 px-8 py-4 font-semibold text-slate-700 dark:text-slate-300 backdrop-blur hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - Dark & Broken Design */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          {/* Broken/glitch background elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500/20 via-transparent to-blue-500/20" />
            <div className="absolute top-10 left-10 w-32 h-px bg-cyan-400/40" />
            <div className="absolute top-20 right-20 w-24 h-px bg-red-400/40 rotate-45" />
            <div className="absolute bottom-32 left-1/4 w-16 h-px bg-purple-400/40 -rotate-12" />
            <div className="absolute bottom-10 right-10 w-28 h-px bg-yellow-400/40 rotate-12" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 relative">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent relative">
                  Our Expertise
                  {/* Glitch effect overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-cyan-500 bg-clip-text text-transparent opacity-0 hover:opacity-20 transition-opacity duration-100">
                    Our Expertise
                  </span>
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Discover how our comprehensive services can transform your business with precision, 
                innovation, and measurable results that drive sustainable growth.
              </p>
            </div>

            {/* Broken Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className={`group relative bg-slate-800 border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 
                    ${index % 3 === 0 ? 'rounded-tl-3xl rounded-br-lg rounded-tr-sm rounded-bl-2xl' : ''}
                    ${index % 3 === 1 ? 'rounded-tl-lg rounded-br-3xl rounded-tr-2xl rounded-bl-sm' : ''}
                    ${index % 3 === 2 ? 'rounded-tl-2xl rounded-br-sm rounded-tr-3xl rounded-bl-lg' : ''}
                    ${index === 0 ? 'mt-8' : ''}
                    ${index === 1 ? 'mt-0' : ''}
                    ${index === 2 ? 'mt-12' : ''}
                    ${index === 3 ? 'mt-4' : ''}
                    ${index === 4 ? 'mt-16' : ''}
                    ${index === 5 ? 'mt-2' : ''}
                    ${index === 6 ? 'mt-10' : ''}
                    ${index === 7 ? 'mt-6' : ''}
                    ${index === 8 ? 'mt-14' : ''}
                  `}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    transform: `rotate(${(index % 3 - 1) * 1.5}deg)`,
                  }}
                >
                  {/* Broken border effects */}
                  <div className="absolute -top-px left-4 right-8 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                  <div className="absolute -bottom-px left-8 right-4 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                  <div className="absolute -left-px top-4 bottom-8 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
                  <div className="absolute -right-px top-8 bottom-4 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent" />
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} 
                       style={{
                         clipPath: `polygon(${10 + (index * 5)}% 0%, 100% ${5 + (index * 3)}%, ${90 - (index * 4)}% 100%, 0% ${95 - (index * 2)}%)`
                       }} />
                  
                  <div className="p-6 relative">
                    {/* Icon with broken shape */}
                    <div className={`inline-flex h-12 w-12 items-center justify-center bg-gradient-to-br ${service.gradient} text-xl mb-4 transform group-hover:scale-110 transition-transform duration-200`}
                         style={{
                           clipPath: `polygon(${15 + (index * 3)}% 0%, 100% ${10 + (index * 2)}%, ${85 - (index * 3)}% 100%, 0% ${90 - (index * 4)}%)`
                         }}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {service.name}
                    </h3>
                    
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features with broken styling */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={feature}
                          className={`px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 
                            ${featureIndex % 2 === 0 ? 'rounded-l-lg rounded-r-sm' : 'rounded-l-sm rounded-r-lg'}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:gap-3 transition-all duration-200 group-hover:animate-pulse`}
                    >
                      Learn More
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                  {/* Random glitch elements */}
                  {index % 3 === 0 && (
                    <div className="absolute top-2 right-2 w-1 h-4 bg-red-500/60" />
                  )}
                  {index % 3 === 1 && (
                    <div className="absolute bottom-2 left-2 w-4 h-1 bg-cyan-500/60" />
                  )}
                  {index % 3 === 2 && (
                    <div className="absolute top-1/2 left-0 w-2 h-2 bg-purple-500/60 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Partner with Glass Inc to bring your vision to life with our expert IT and business solutions. 
              Let's build something extraordinary together and unlock your digital potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Contact Us Today
                <span>→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur hover:bg-white/20 transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}