import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Enhanced background with parallax-style effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Animated gradient borders */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse delay-1000" />
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:24px_24px] animate-pulse" />
        
        {/* Floating orbs with enhanced animation */}
        <div className="absolute top-20 left-1/5 w-48 h-48 bg-gradient-to-br from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1500" />
        <div className="absolute top-1/2 right-1/5 w-32 h-32 bg-gradient-to-br from-cyan-500/6 to-blue-500/6 rounded-full blur-2xl animate-pulse delay-3000" />
        
        {/* Subtle particle effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse`}
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i * 5)}%`,
                animationDelay: `${i * 500}ms`,
                animationDuration: `${2000 + (i * 200)}ms`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 relative">
        {/* Main Grid with improved spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-20">
          
          {/* Brand Section - More prominent */}
          <div className="lg:col-span-2">
            <div className="group flex items-center gap-5 mb-10">
              <div className="relative">
                {/* Enhanced logo with glow effect */}
                <div className="h-16 w-10 border-2 border-blue-400 bg-gradient-to-b from-blue-400/25 to-purple-400/15 backdrop-blur-sm transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 rounded-sm" />
                <div className="absolute inset-0 h-16 w-10 border-2 border-blue-400/40 animate-pulse rounded-sm" />
                <div className="absolute inset-0 h-16 w-10 bg-gradient-to-br from-blue-400/10 to-transparent blur-md group-hover:blur-lg transition-all duration-500" />
              </div>
              <div>
                <span className="text-3xl font-black bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent tracking-tight">
                  Glass Inc
                </span>
                <div className="text-xs text-blue-400/80 font-semibold tracking-[0.25em] mt-2 relative">
                  ELITE IT SOLUTIONS
                  <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-400/60 to-transparent" />
                </div>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-10 max-w-md text-lg font-light">
              Transforming businesses through cutting-edge technology solutions, 
              <span className="text-blue-300 font-medium"> AI innovation</span>, and 
              <span className="text-purple-300 font-medium"> strategic digital growth</span>.
            </p>

            {/* Enhanced stats with better visual treatment */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "150+", label: "Projects", color: "blue", gradient: "from-blue-500/20 to-blue-600/20" },
                { value: "98%", label: "Satisfaction", color: "purple", gradient: "from-purple-500/20 to-pink-600/20" },
                { value: "24/7", label: "Support", color: "cyan", gradient: "from-cyan-500/20 to-teal-600/20" }
              ].map((stat, index) => (
                <div key={stat.label} className={`group text-center p-5 rounded-2xl bg-gradient-to-br ${stat.gradient} border border-slate-700/60 backdrop-blur-sm hover:border-${stat.color}-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${stat.color}-500/10`}>
                  <div className={`text-2xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof badges */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-700/50">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <div className="flex -space-x-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full border border-slate-900" />
                  ))}
                </div>
                <span className="font-medium">5.0 rated</span>
              </div>
              <div className="w-px h-4 bg-slate-600" />
              <div className="text-xs text-slate-400">
                <span className="font-medium text-green-400">●</span> Available now
              </div>
            </div>
          </div>

          {/* Services Column - Enhanced */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-8 text-lg relative group">
              Services
              <div className="absolute -bottom-3 left-0 w-10 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover:w-16 transition-all duration-300" />
            </h4>
            <ul className="space-y-5">
              {[
                { name: "Web Development", href: "/services", icon: "🌐", desc: "Modern web apps" },
                { name: "Mobile Apps", href: "/services", icon: "📱", desc: "iOS & Android" },
                { name: "AI Solutions", href: "/services", icon: "🤖", desc: "Smart automation" },
                { name: "UI/UX Design", href: "/services", icon: "🎨", desc: "Beautiful interfaces" },
                { name: "Cloud Solutions", href: "/services", icon: "☁️", desc: "Scalable infrastructure" }
              ].map((service) => (
                <li key={service.name} className="group">
                  <Link 
                    href={service.href} 
                    className="text-slate-400 hover:text-white transition-all duration-300 text-sm flex items-start gap-4 p-2 rounded-lg hover:bg-slate-800/40 hover:translate-x-2"
                  >
                    <span className="text-lg opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 mt-0.5">
                      {service.icon}
                    </span>
                    <div>
                      <span className="block font-medium group-hover:text-blue-400 transition-colors">
                        {service.name}
                      </span>
                      <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                        {service.desc}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column - Enhanced */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-8 text-lg relative group">
              Company
              <div className="absolute -bottom-3 left-0 w-10 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full group-hover:w-16 transition-all duration-300" />
            </h4>
            <ul className="space-y-5">
              {[
                { name: "About Us", href: "/about", desc: "Our story" },
                { name: "Our Team", href: "/about", desc: "Meet the experts" },
                { name: "Portfolio", href: "/portfolio", desc: "Our work" },
                { name: "Careers", href: "/careers", desc: "Join us" },
                { name: "Blog", href: "/blog", desc: "Insights & updates" }
              ].map((link) => (
                <li key={link.name} className="group">
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-all duration-300 text-sm hover:translate-x-2 block p-2 rounded-lg hover:bg-slate-800/40"
                  >
                    <span className="block font-medium group-hover:text-purple-400 transition-colors">
                      {link.name}
                    </span>
                    <span className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                      {link.desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column - Significantly enhanced */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-8 text-lg relative group">
              Get in Touch
              <div className="absolute -bottom-3 left-0 w-10 h-1 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full group-hover:w-20 transition-all duration-300" />
            </h4>
            
            <div className="space-y-8">
              {/* Contact methods with enhanced design */}
              <div className="space-y-4">
                <a 
                  href="mailto:hello@glassinc.dev" 
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">✉</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      Email Us
                    </div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      hello@glassinc.dev
                    </div>
                    <div className="text-xs text-slate-500">
                      Response within 2 hours
                    </div>
                  </div>
                  <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </a>
                
                <a 
                  href="tel:+15551234567" 
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-purple-400/50 hover:bg-slate-800/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">☎</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                      Call Us
                    </div>
                    <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      +1 (555) 123-4567
                    </div>
                    <div className="text-xs text-slate-500">
                      Mon-Fri 9AM-6PM EST
                    </div>
                  </div>
                  <div className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </a>
              </div>

              {/* Enhanced CTA section */}
              <div className="pt-6 border-t border-slate-700/50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-semibold rounded-xl text-sm hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
                  >
                    Start Project
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <Link 
                    href="/consultation"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-800/50 border border-slate-600 text-slate-300 font-semibold rounded-xl text-sm hover:bg-slate-700/50 hover:border-slate-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Free Consultation
                  </Link>
                </div>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  No commitment • Free quote within 24h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-slate-800/40 to-slate-700/40 border border-slate-600/50 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-slate-400 text-sm">Get the latest tech insights and industry updates delivered to your inbox.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 lg:w-64 px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            <div className="px-12 bg-slate-950">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse delay-500" />
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full animate-pulse delay-1000" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Completely revamped */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Glass Inc. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
                { name: "Support", href: "/contact" }
              ].map((link, index) => (
                <div key={link.name} className="flex items-center gap-6">
                  {index > 0 && <span className="text-slate-600">•</span>}
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-300 hover:underline">
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="text-sm font-medium bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Clarity. Precision. Innovation.
            </p>
            <div className="h-0.5 w-full bg-gradient-to-r from-blue-400/40 via-purple-400/60 to-cyan-400/40 rounded-full mb-3" />
            <p className="text-sm text-slate-500 mb-1">Crafting digital excellence since 2019</p>
            <p className="text-xs text-slate-600">Trusted by 150+ businesses worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
}