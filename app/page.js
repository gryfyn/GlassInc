"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextType from "../components/TypeText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  { name: "Web Development", desc: "High-performance web apps.", icon: "🧱", gradient: "from-blue-500 to-cyan-500" },
  { name: "Mobile Development", desc: "iOS/Android cross‑platform.", icon: "📱", gradient: "from-purple-500 to-pink-500" },
  { name: "AI Automation", desc: "Agents and LLM workflows.", icon: "🤖", gradient: "from-emerald-500 to-teal-500" },
  { name: "Digital Marketing", desc: "Acquisition and analytics.", icon: "📣", gradient: "from-orange-500 to-red-500" },
  { name: "Graphic Design", desc: "Brand and UI/UX systems.", icon: "🎨", gradient: "from-violet-500 to-purple-500" },
  { name: "SEO", desc: "Technical + content SEO.", icon: "🔎", gradient: "from-green-500 to-emerald-500" },
  { name: "Software Development", desc: "Custom platforms.", icon: "🧩", gradient: "from-indigo-500 to-blue-500" },
  { name: "Cloud Solutions", desc: "Scalable infrastructure.", icon: "☁️", gradient: "from-sky-500 to-blue-500" },
  { name: "Data Analytics", desc: "Decisions from data.", icon: "📊", gradient: "from-yellow-500 to-orange-500" },
];

const projects = [
  { 
    title: "E‑commerce Platform", 
    tag: "Web Development", 
    desc: "Headless storefront with performance and conversion.", 
    image: "/placeholder.svg",
    metrics: ["300% increase in conversions", "50ms load time", "99.9% uptime"]
  },
  { 
    title: "Fitness Mobile App", 
    tag: "Mobile Development", 
    desc: "Offline sync, subscriptions, analytics.", 
    image: "/placeholder.svg",
    metrics: ["100K+ downloads", "4.8★ rating", "Real-time sync"]
  },
  { 
    title: "AI Support Agent", 
    tag: "AI Automation", 
    desc: "LLM‑powered agent with CRM integration.", 
    image: "/placeholder.svg",
    metrics: ["80% query resolution", "24/7 availability", "Multi-language support"]
  },
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <main className="flex-1">
        {/* Enhanced Hero Section - Mobile Optimized */}
        <section className="relative overflow-hidden">
          {/* Dynamic background elements - Reduced for mobile */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 md:top-20 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 md:bottom-20 right-1/3 w-40 md:w-80 h-40 md:h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500" />
            
            {/* Floating particles - Hidden on small screens */}
            <div className="hidden sm:block absolute top-1/3 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300" />
            <div className="hidden sm:block absolute top-1/4 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-700" />
            <div className="hidden sm:block absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-1000" />
          </div>

          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32 relative">
            {/* Brand badge - Mobile optimized */}
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 md:mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-wider text-blue-700 dark:text-blue-300">
                CLARITY. PRECISION. INNOVATION
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] md:leading-[1.05] max-w-[95%] md:max-w-[90%]">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Glass Inc
              </span>
              <span className="text-slate-900 dark:text-white block">
                <span className="hidden md:inline">— </span>
                <TextType
                  text="IT and Business Solutions, brilliantly executed."
                  typingSpeed={75}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </span>
            </h1>

            <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-full md:max-w-3xl leading-relaxed">
              We build standout products across web, mobile, AI automation, and growth. 
              <span className="font-semibold text-blue-600"> Senior talent.</span>
              <span className="font-semibold text-purple-600"> Faster delivery.</span>
              <span className="font-semibold text-cyan-600"> Transparent outcomes.</span>
            </p>

            {/* Enhanced CTA buttons - Mobile stacked */}
            {/* Enhanced CTA buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Start Your Project
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 px-8 py-4 font-semibold text-slate-700 dark:text-slate-300 backdrop-blur hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
              >
                View Services
              </a>
            </div>

            {/* Trust indicators - Mobile optimized */}
            <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-xs md:max-w-md">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">150+</div>
                <div className="text-xs md:text-sm text-slate-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">98%</div>
                <div className="text-xs md:text-sm text-slate-500">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-xs md:text-sm text-slate-500">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Services Carousel Section - Mobile Optimized */}
        <section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
          {/* Dark background effects - Simplified for mobile */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20" />
            <div className="hidden md:block absolute top-20 left-20 w-48 h-px bg-cyan-400/40" />
            <div className="hidden md:block absolute bottom-32 right-1/4 w-32 h-px bg-purple-400/40 rotate-45" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
            <div className="hidden md:block absolute bottom-10 right-10 w-36 h-px bg-blue-400/40 -rotate-12" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Expertise that ships
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-full md:max-w-3xl mx-auto leading-relaxed px-4">
                Comprehensive solutions designed to accelerate your digital transformation and drive measurable results.
              </p>
            </div>
            
            {/* Carousel Container - Mobile responsive */}
            <div className="relative max-w-7xl mx-auto">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1} // Mobile: 1 slide
                breakpoints={{
                  640: {
                    slidesPerView: 2, // Tablet: 2 slides
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3, // Desktop: 3 slides
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                className="mySwiper !pb-8"
                style={{
                  '--swiper-navigation-color': 'transparent', // Hide navigation
                  '--swiper-pagination-color': '#60a5fa', // Blue pagination dots
                }}
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="group relative bg-slate-800 border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden mx-2 md:mx-0">
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                      
                      {/* Glitch borders */}
                      <div className="absolute -top-px left-4 right-8 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                      <div className="absolute -bottom-px left-8 right-4 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                      
                      <div className="p-6 md:p-8 relative">
                        {/* Icon */}
                        <div className={`inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center bg-gradient-to-br ${service.gradient} text-xl md:text-2xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-200 rounded-lg md:rounded-xl`}>
                          {service.icon}
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{service.name}</h3>
                        <p className="text-slate-300 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">{service.desc}</p>
                        
                        {/* Action button */}
                        <button className={`w-full py-3 px-4 md:px-6 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg opacity-80 hover:opacity-100 transition-all duration-200 transform hover:scale-105 text-sm md:text-base`}>
                          Learn More
                        </button>
                      </div>

                      {/* Random glitch elements - Responsive */}
                      {index % 3 === 0 && (
                        <div className="absolute top-2 right-2 w-1 h-4 md:h-6 bg-blue-500/60" />
                      )}
                      {index % 3 === 1 && (
                        <div className="absolute bottom-2 left-2 w-4 md:w-6 h-1 bg-purple-500/60" />
                      )}
                      {index % 3 === 2 && (
                        <div className="absolute top-1/3 right-0 w-1.5 md:w-2 h-1.5 md:h-2 bg-cyan-500/60 rounded-full" />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* View All Services CTA - Mobile optimized */}
            <div className="text-center mt-8 md:mt-12">
              <a 
                href="/services" 
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-sm md:text-base"
              >
                View All Services
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Enhanced Portfolio Section - Mobile Optimized */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Background decoration - Hidden on mobile */}
          <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="hidden md:block absolute top-10 right-10 w-32 h-px bg-gradient-to-r from-transparent to-blue-300" />
            <div className="hidden md:block absolute bottom-10 left-10 w-32 h-px bg-gradient-to-r from-purple-300 to-transparent" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-3 md:mb-4">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h2>
                <p className="text-base md:text-lg text-slate-600">
                  Real results from real projects. See how we transform businesses through technology.
                </p>
              </div>
              <a href="/contact" className="inline-flex md:hidden lg:inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base">
                Work with us
                <span>→</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <a 
                  key={project.title} 
                  href="/contact" 
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-48 md:h-56 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    {/* Placeholder gradient instead of image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-cyan-400/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Project tag */}
                    <div className="absolute top-3 md:top-4 left-3 md:left-4 px-2 md:px-3 py-1 bg-white/90 backdrop-blur rounded-full">
                      <span className="text-xs font-semibold text-blue-600">{project.tag}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{project.desc}</p>
                    
                    {/* Metrics */}
                    <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span className="text-xs text-slate-500">{metric}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all text-sm md:text-base">
                      View Case Study
                      <span>→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* New CTA Section - Mobile Optimized */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 text-center relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-base md:text-xl text-white/90 max-w-full md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
              Let's transform your ideas into powerful digital solutions that drive growth and exceed expectations.
            </p>
            
            <div className="flex flex-col gap-3 md:gap-4 justify-center max-w-sm md:max-w-none mx-auto">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-purple-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Start Your Project
                <span>→</span>
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white backdrop-blur hover:bg-white/20 transition-all duration-200"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}