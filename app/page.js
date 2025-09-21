"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextType from "../components/TypeText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden">
          {/* Dynamic background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500" />
            
            {/* Floating particles */}
            <div className="absolute top-1/3 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300" />
            <div className="absolute top-1/4 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-700" />
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-1000" />
          </div>

          <div className="container mx-auto px-6 py-24 md:py-32 relative">
            {/* Brand badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold tracking-wider text-blue-700 dark:text-blue-300">
                CLARITY. PRECISION. INNOVATION
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] max-w-[90%]">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Glass Inc
              </span>
              <span className="text-slate-900 dark:text-white block md:inline">
                {" "}
                —{" "}
                <TextType
                  text="IT and Business Solutions, brilliantly executed."
                  typingSpeed={75}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              We build standout products across web, mobile, AI automation, and growth. 
              <span className="font-semibold text-blue-600"> Senior talent.</span>
              <span className="font-semibold text-purple-600"> Faster delivery.</span>
              <span className="font-semibold text-cyan-600"> Transparent outcomes.</span>
            </p>

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

            {/* Trust indicators */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">150+</div>
                <div className="text-sm text-slate-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-slate-500">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-slate-500">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Services Carousel Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          {/* Dark background effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20" />
            <div className="absolute top-20 left-20 w-48 h-px bg-cyan-400/40" />
            <div className="absolute bottom-32 right-1/4 w-32 h-px bg-purple-400/40 rotate-45" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
            <div className="absolute bottom-10 right-10 w-36 h-px bg-blue-400/40 -rotate-12" />
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Expertise that ships
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions designed to accelerate your digital transformation and drive measurable results.
              </p>
            </div>
            
            {/* Carousel Container */}
            <div className="relative max-w-7xl mx-auto">
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true, // Pause on hover for better visibility
                }}
                navigation
                loop={true}
                className="mySwiper"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="group relative bg-slate-800 border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden"
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                      
                      {/* Glitch borders */}
                      <div className="absolute -top-px left-4 right-8 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                      <div className="absolute -bottom-px left-8 right-4 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                      
                      <div className="p-8 relative">
                        {/* Icon */}
                        <div className={`inline-flex h-16 w-16 items-center justify-center bg-gradient-to-br ${service.gradient} text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-200`}
                             style={{
                               clipPath: `polygon(${10 + (index % 3 * 5)}% 0%, 100% ${5 + (index % 3 * 3)}%, ${90 - (index % 3 * 4)}% 100%, 0% ${95 - (index % 3 * 2)}%)`
                             }}>
                          {service.icon}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                        <p className="text-slate-300 leading-relaxed mb-6">{service.desc}</p>
                        
                        {/* Action button */}
                        <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg opacity-80 hover:opacity-100 transition-all duration-200 transform hover:scale-105`}>
                          Learn More
                        </button>
                      </div>

                      {/* Random glitch elements */}
                      {index % 3 === 0 && (
                        <div className="absolute top-2 right-2 w-1 h-6 bg-blue-500/60" />
                      )}
                      {index % 3 === 1 && (
                        <div className="absolute bottom-2 left-2 w-6 h-1 bg-purple-500/60" />
                      )}
                      {index % 3 === 2 && (
                        <div className="absolute top-1/3 right-0 w-2 h-2 bg-cyan-500/60 rounded-full" />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* View All Services CTA */}
            <div className="text-center mt-12">
              <a 
                href="/services" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                View All Services
                <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Enhanced Portfolio Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none opacity-50">
            <div className="absolute top-10 right-10 w-32 h-px bg-gradient-to-r from-transparent to-blue-300" />
            <div className="absolute bottom-10 left-10 w-32 h-px bg-gradient-to-r from-purple-300 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="flex items-end justify-between gap-4 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h2>
                <p className="text-lg text-slate-600">
                  Real results from real projects. See how we transform businesses through technology.
                </p>
              </div>
              <a href="/contact" className="hidden md:inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                Work with us
                <span>→</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <a 
                  key={project.title} 
                  href="/contact" 
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    {/* Placeholder gradient instead of image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-cyan-400/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Project tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full">
                      <span className="text-xs font-semibold text-blue-600">{project.tag}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{project.desc}</p>
                    
                    {/* Metrics */}
                    <div className="space-y-2 mb-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span className="text-xs text-slate-500">{metric}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      View Case Study
                      <span>→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* New CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
              Let's transform your ideas into powerful digital solutions that drive growth and exceed expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Start Your Project
                <span>→</span>
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur hover:bg-white/20 transition-all duration-200"
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