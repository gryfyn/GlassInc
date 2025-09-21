'use client'
import Head from 'next/head'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useState, useEffect } from 'react'
import Link from 'next/link'

const team = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    desc: 'Visionary leader with 15+ years in IT and business solutions, driving innovation and client success.',
    image: '/placeholder.svg',
    gradient: 'from-blue-500 to-purple-500',
    expertise: ['Strategic Planning', 'Business Growth', 'Team Leadership']
  },
  {
    name: 'John Smith',
    role: 'Lead Developer',
    desc: 'Expert in web and mobile development, specializing in scalable, high-performance applications.',
    image: '/placeholder.svg',
    gradient: 'from-purple-500 to-pink-500',
    expertise: ['React/Next.js', 'Mobile Apps', 'Cloud Architecture']
  },
  {
    name: 'Emily Chen',
    role: 'AI & Data Specialist',
    desc: 'Pioneer in AI automation and data analytics, transforming businesses with data-driven insights.',
    image: '/placeholder.svg',
    gradient: 'from-cyan-500 to-blue-500',
    expertise: ['Machine Learning', 'Data Analytics', 'AI Automation']
  },
]

const values = [
  {
    name: 'Clarity',
    desc: 'We deliver transparent solutions, ensuring clients understand every step of the process.',
    icon: '💡',
    gradient: 'from-yellow-500 to-orange-500',
    benefits: ['Transparent Communication', 'Clear Roadmaps', 'Regular Updates']
  },
  {
    name: 'Precision',
    desc: 'Our work is meticulous, built with attention to detail and a commitment to excellence.',
    icon: '🎯',
    gradient: 'from-red-500 to-pink-500',
    benefits: ['Quality Assurance', 'Detailed Testing', 'Performance Optimization']
  },
  {
    name: 'Innovation',
    desc: 'We push boundaries with cutting-edge technology to create future-ready solutions.',
    icon: '🚀',
    gradient: 'from-indigo-500 to-purple-500',
    benefits: ['Latest Technologies', 'Creative Solutions', 'Future-Proof Design']
  },
]

const stats = [
  { number: '150+', label: 'Projects Completed', icon: '📊' },
  { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
  { number: '50+', label: 'Happy Clients', icon: '🤝' },
  { number: '5+', label: 'Years of Excellence', icon: '🏆' },
]

const companyJourney = [
  { phase: 'Founded', year: '2019', description: 'Started with a vision' },
  { phase: 'Growing', year: '2021', description: 'Expanding our reach' },
  { phase: 'Innovating', year: '2023', description: 'Leading with AI' },
  { phase: 'Transforming', year: '2024', description: 'Your digital future' },
]

export default function About() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [animatedWords, setAnimatedWords] = useState('')
  
  const words = ['Crafting', 'Building', 'Designing', 'Creating', 'Engineering']
  const endings = ['Tomorrow\'s Solutions Today', 'Digital Excellence', 'Innovation That Matters', 'Your Success Story']

  useEffect(() => {
    let wordIndex = 0
    const interval = setInterval(() => {
      setAnimatedWords(words[wordIndex] + ' ' + endings[wordIndex % endings.length])
      wordIndex = (wordIndex + 1) % words.length
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % companyJourney.length)
    }, 3000)

    return () => clearInterval(phaseInterval)
  }, [])
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Head>
        <title>Glass Inc | About Us - Our Mission, Team, and Values</title>
        <meta
          name="description"
          content="Learn about Glass Inc, a leader in IT and business solutions. Meet our team, discover our mission, and explore our commitment to clarity, precision, and innovation."
        />
        <meta
          name="keywords"
          content="Glass Inc, about us, IT solutions, business solutions, web development, mobile development, AI automation, team, mission, values"
        />
        <meta name="author" content="Glass Inc" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en-US" />
        <link rel="canonical" href="https://glassinc.com/about" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Glass Inc | About Us" />
        <meta
          property="og:description"
          content="Discover Glass Inc's mission, meet our expert team, and learn about our values of clarity, precision, and innovation in delivering IT and business solutions."
        />
        <meta property="og:url" content="https://glassinc.com/about" />
        <meta property="og:site_name" content="Glass Inc" />
        <meta property="og:image" content="https://glassinc.com/assets/glass-inc-about.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Glass Inc About Us" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glass Inc | About Us" />
        <meta name="twitter:description" content="Learn about Glass Inc's mission, team, and values in delivering innovative IT and business solutions." />
        <meta name="twitter:image" content="https://glassinc.com/assets/glass-inc-about.jpg" />
        <meta name="twitter:image:alt" content="Glass Inc About Us" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                WHO WE ARE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] max-w-[90%]">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                About Glass Inc
              </span>
              <span className="text-slate-900 dark:text-white block md:inline">
                {" "}
                —{" "}
                <span 
                  key={animatedWords} 
                  className="inline-block bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse"
                >
                  {animatedWords}
                </span>
              </span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              At Glass Inc, we blend 
              <span className="font-semibold text-blue-600"> clarity</span>, 
              <span className="font-semibold text-purple-600"> precision</span>, and 
              <span className="font-semibold text-cyan-600"> innovation</span> to deliver transformative IT and business solutions, empowering our clients to achieve unparalleled success.
            </p>

            {/* Interactive Company Journey Timeline */}
            <div className="mt-12 p-6 bg-white/80 backdrop-blur rounded-2xl border border-slate-200 max-w-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">Our Journey</h3>
                <div className="flex gap-2">
                  {companyJourney.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentPhase ? 'bg-blue-500' : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {companyJourney[currentPhase].year}
                </div>
                <div className="text-xl font-semibold text-slate-900 mb-1">
                  {companyJourney[currentPhase].phase}
                </div>
                <div className="text-sm text-slate-600">
                  {companyJourney[currentPhase].description}
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Work With Us
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 px-8 py-4 font-semibold text-slate-700 dark:text-slate-300 backdrop-blur hover:bg-white dark:hover:bg-slate-800 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Glass Inc is dedicated to revolutionizing businesses through innovative technology and strategic solutions. We provide high-performance web, mobile, and AI-driven tools, paired with data-driven marketing and design, to help our clients thrive in a competitive digital landscape.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold text-blue-700">Transforming Ideas into Digital Reality</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Team Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          {/* Dark background effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20" />
            <div className="absolute top-20 left-20 w-32 h-px bg-cyan-400/40" />
            <div className="absolute bottom-32 right-1/4 w-24 h-px bg-purple-400/40 rotate-45" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
            <div className="absolute bottom-10 left-10 w-28 h-px bg-blue-400/40 -rotate-12" />
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Our senior talent brings decades of expertise across web, mobile, AI, and business growth, ensuring your project is in capable hands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="group relative bg-slate-800 border border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Image placeholder with gradient */}
                  <div className={`relative h-64 w-full bg-gradient-to-br ${member.gradient} opacity-20`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent" />
                    {/* Avatar placeholder */}
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
                      {member.role}
                    </p>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">{member.desc}</p>
                    
                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Connect button */}
                    <button className={`w-full py-2 px-4 bg-gradient-to-r ${member.gradient} text-white font-medium rounded-lg opacity-80 hover:opacity-100 transition-opacity`}>
                      Connect
                    </button>
                  </div>

                  {/* Glitch elements */}
                  {index % 3 === 0 && (
                    <div className="absolute top-2 right-2 w-1 h-4 bg-blue-500/60" />
                  )}
                  {index % 3 === 1 && (
                    <div className="absolute bottom-2 left-2 w-4 h-1 bg-purple-500/60" />
                  )}
                  {index % 3 === 2 && (
                    <div className="absolute top-1/3 right-0 w-2 h-2 bg-cyan-500/60 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Values Section */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                These principles guide every project we undertake, ensuring exceptional outcomes for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.name}
                  className="group relative rounded-2xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-200`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.name}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{value.desc}</p>
                  
                  {/* Benefits */}
                  <div className="space-y-2">
                    {value.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="text-sm text-slate-500">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 text-center relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Partner with Glass Inc to transform your vision into reality with our expert IT and business solutions. Contact us today to start your journey toward digital excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get in Touch
                <span>→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur hover:bg-white/20 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}