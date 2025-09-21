'use client'
import Head from 'next/head'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link'
import { useState, useEffect } from 'react'

const contactInfo = [
  {
    name: 'Email',
    value: 'info@glassinc.com',
    icon: '📧',
    link: 'mailto:info@glassinc.com',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Drop us a line anytime',
    response: 'We respond within 2 hours'
  },
  {
    name: 'Phone',
    value: '+1 (555) 123-4567',
    icon: '📞',
    link: 'tel:+15551234567',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Call us during business hours',
    response: 'Mon-Fri, 9AM-6PM PST'
  },
  {
    name: 'Address',
    value: '123 Innovation Drive, Tech City, CA 94043, USA',
    icon: '📍',
    link: 'https://maps.google.com/?q=123+Innovation+Drive,+Tech+City,+CA+94043',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Visit our headquarters',
    response: 'Schedule a meeting'
  },
]

const projectTypes = [
  { name: 'Web Development', icon: '🌐', popular: true },
  { name: 'Mobile Apps', icon: '📱', popular: true },
  { name: 'AI Automation', icon: '🤖', popular: false },
  { name: 'Digital Marketing', icon: '📈', popular: false },
  { name: 'UI/UX Design', icon: '🎨', popular: false },
  { name: 'Cloud Solutions', icon: '☁️', popular: false },
]

const quickStats = [
  { value: '< 2hrs', label: 'Response Time', icon: '⚡' },
  { value: '100%', label: 'Project Success', icon: '🎯' },
  { value: '24/7', label: 'Support Available', icon: '🛟' },
]

export default function Contact() {
  const [selectedProject, setSelectedProject] = useState('')
  const [animatedText, setAnimatedText] = useState('')
  const textOptions = [
    'Start Your Project Today',
    'Transform Your Business',
    'Build Something Amazing',
    'Innovation Awaits'
  ]

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setAnimatedText(textOptions[currentIndex])
      currentIndex = (currentIndex + 1) % textOptions.length
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Head>
        <title>Glass Inc | Contact Us - Get in Touch for IT and Business Solutions</title>
        <meta
          name="description"
          content="Contact Glass Inc for expert IT and business solutions, including web development, mobile apps, AI automation, and more. Reach out via email, phone, or visit our office."
        />
        <meta
          name="keywords"
          content="Glass Inc contact, IT solutions, business solutions, web development, mobile development, AI automation, digital marketing, contact us"
        />
        <meta name="author" content="Glass Inc" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en-US" />
        <link rel="canonical" href="https://glassinc.com/contact" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Glass Inc | Contact Us" />
        <meta
          property="og:description"
          content="Get in touch with Glass Inc for innovative IT and business solutions. Contact us via email, phone, or visit our office to start your project."
        />
        <meta property="og:url" content="https://glassinc.com/contact" />
        <meta property="og:site_name" content="Glass Inc" />
        <meta property="og:image" content="https://glassinc.com/assets/glass-inc-contact.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Glass Inc Contact Us" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Glass Inc | Contact Us" />
        <meta name="twitter:description" content="Reach out to Glass Inc for web development, mobile apps, AI automation, and more. Contact us today!" />
        <meta name="twitter:image" content="https://glassinc.com/assets/glass-inc-contact.jpg" />
        <meta name="twitter:image:alt" content="Glass Inc Contact Us" />
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
            
            {/* Contact-themed particles */}
            <div className="absolute top-1/4 left-10 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-300" />
            <div className="absolute top-1/3 right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-700" />
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1000" />
          </div>

          <div className="container mx-auto px-6 py-24 md:py-32 relative">
            {/* Status badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold tracking-wider text-green-700 dark:text-green-300">
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] max-w-[90%]">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Contact Glass Inc
              </span>
              <span className="text-slate-900 dark:text-white block md:inline">
                {" "}
                —{" "}
                <span 
                  key={animatedText} 
                  className="inline-block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent animate-pulse"
                >
                  {animatedText}
                </span>
              </span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Ready to transform your business with innovative IT solutions? Our expert team is here to discuss your vision and 
              <span className="font-semibold text-green-600"> accelerate your success</span>.
            </p>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {quickStats.map((stat, index) => (
                <div key={stat.label} className="text-center" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="mailto:info@glassinc.com"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get in Touch
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

        {/* Project Type Selector */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What type of project do you have in mind?</h2>
              <p className="text-slate-600">Select one to help us understand your needs better</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {projectTypes.map((project) => (
                <button
                  key={project.name}
                  onClick={() => setSelectedProject(project.name)}
                  className={`relative p-6 rounded-xl border-2 transition-all duration-200 ${
                    selectedProject === project.name
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {project.popular && (
                    <div className="absolute -top-2 -right-2 px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="text-3xl mb-2">{project.icon}</div>
                  <div className="font-semibold text-sm">{project.name}</div>
                </button>
              ))}
            </div>
            {selectedProject && (
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                  <span className="text-blue-600 font-medium">Selected: {selectedProject}</span>
                  <span className="text-blue-400">✓</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Enhanced Contact Info */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Multiple Ways to Connect
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Choose the method that works best for you. We're here to answer your questions and help bring your ideas to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {contactInfo.map((info, index) => (
                <Link
                  key={info.name}
                  href={info.link}
                  className="group relative rounded-2xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${info.gradient} text-2xl mb-6 transform group-hover:scale-110 transition-transform duration-200`}>
                    {info.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{info.name}</h3>
                  <p className="text-slate-600 mb-4">{info.description}</p>
                  <p className="text-slate-900 font-semibold mb-4">{info.value}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{info.response}</span>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform`}>
                      {info.name === 'Address' ? 'View Map →' : `Contact Now →`}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Contact Form Preview */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Start Your Project</h2>
                <p className="text-xl text-slate-600">Tell us about your vision and we'll get back to you within 2 hours</p>
              </div>
              
              {/* Form Preview/CTA */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                    <p className="text-slate-600 mb-6">
                      Send us an email with your project details, or schedule a call to discuss your requirements in detail.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-slate-600">Free initial consultation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-slate-600">Detailed project proposal</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-slate-600">Timeline and budget estimate</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Link
                      href="mailto:info@glassinc.com?subject=New Project Inquiry&body=Hi Glass Inc team,%0D%0A%0D%0AI'm interested in discussing a project with you.%0D%0A%0D%0AProject Type: [Please specify]%0D%0ATimeline: [When do you need this completed?]%0D%0ABudget Range: [Optional]%0D%0A%0D%0AProject Details:%0D%0A[Please describe your project, goals, and any specific requirements]%0D%0A%0D%0AThank you!"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      Send Project Email
                      <span>→</span>
                    </Link>
                    <Link
                      href="tel:+15551234567"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-200"
                    >
                      Schedule a Call
                      <span>📞</span>
                    </Link>
                  </div>
                </div>
              </div>
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
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Let's work together to create innovative solutions tailored to your business needs. Your next breakthrough is just one conversation away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:info@glassinc.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Send Us an Email
                <span>→</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur hover:bg-white/20 transition-all duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}