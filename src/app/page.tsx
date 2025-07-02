'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Zap,
  Layers,
  Wifi,
  Printer,
  ShieldCheck,
  Twitter,
  Facebook,
  X,
  Paintbrush,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import React, { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [selectedPrinter, setSelectedPrinter] = useState<{
    name: string
  } | null>(null)
  const bookingRef = useRef<HTMLDivElement>(null)

  const handleSelectPrinter = (printerName: string) => {
    setSelectedPrinter({ name: printerName })
  }

  useEffect(() => {
    if (selectedPrinter) {
      bookingRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }, [selectedPrinter])

  const printers = [
    {
      name: 'Brother MFC-L6910DN',
      description:
        'A high-performance monochrome laser printer designed for demanding office environments, offering fast printing, advanced scanning, and robust security.',
      image: 'https://i.postimg.cc/dV7vhZBV/MFCL6910-DN.jpg',
      hint: 'office laser printer',
      rating: 4.8,
      price: 'From $899',
      badge: 'Best Seller',
      specs: [
        { icon: Printer, text: 'Monochrome Laser' },
        { icon: Zap, text: 'Up to 52 ppm' },
        { icon: Layers, text: 'Print, Scan, Copy, Fax' },
        { icon: ShieldCheck, text: 'Advanced Security' },
      ],
    },
    {
      name: 'Brother MFC-L6710DW',
      description: 'A versatile monochrome laser printer for busy workgroups, offering fast printing, wireless connectivity, and flexible paper handling.',
      image: 'https://i.postimg.cc/xqDGLzmV/MFC-L6710-DW.jpg',
      hint: 'business laser printer',
      rating: 4.6,
      price: 'From $749',
      badge: 'Popular Choice',
      specs: [
        { icon: Printer, text: 'Monochrome Laser' },
        { icon: Zap, text: 'Up to 50 ppm' },
        { icon: Layers, text: 'Print, Scan, Copy, Fax' },
        { icon: Wifi, text: 'Wireless & Gigabit Ethernet' },
      ],
    },
  ]

  const features = [
    {
      icon: Zap,
      title: 'Lightning-Fast Printing',
      description: 'Experience blazing speeds up to 52 pages per minute with our advanced laser technology.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
    },
    {
      icon: Paintbrush,
      title: 'Exceptional Quality',
      description: 'Crystal-clear text and sharp graphics with professional-grade output quality.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    {
      icon: Layers,
      title: 'All-in-One Solution',
      description: 'Print, scan, copy, and fax with one powerful, space-saving device.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      icon: Wifi,
      title: 'Smart Connectivity',
      description: 'Seamless wireless printing from any device, anywhere in your office.',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Office Manager',
      company: 'TechCorp Solutions',
      content: 'The Brother MFC-L6910DN has transformed our office productivity. The speed and quality are unmatched!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'IT Director',
      company: 'Digital Innovations',
      content: 'Excellent reliability and the wireless features make it perfect for our hybrid work environment.',
      rating: 5,
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      {/* Enhanced Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 glass-effect">
        <Link href="#" className="flex items-center justify-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Printer className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl gradient-text">JK Printers</span>
        </Link>
        <nav className="ml-auto flex gap-6 items-center">
          <Link
            href="/support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            Support
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section id="home" className="relative w-full h-[100vh] md:h-[130vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080/1a1a1a/ffffff?text=Modern+Office+Printing"
              alt="Modern office with professional printing equipment"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Professional Printing Solutions
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-2xl">
                Elevate Your <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Printing Experience</span>
              </h1>
              <p className="mt-6 max-w-[700px] mx-auto text-lg md:text-xl text-white/90 leading-relaxed">
                Discover our latest range of high-performance printers designed for efficiency, quality, and reliability in professional environments.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Printers Section */}
        <section id="printers" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <Star className="w-4 h-4" />
                Featured Products
              </div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl gradient-text">
                Premium Printer Collection
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose from our carefully curated selection of professional printers that deliver exceptional quality, speed, and reliability for your business needs.
              </p>
            </div>
            
            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
              {printers.map((printer, index) => (
                <Card key={printer.name} className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl card-hover-effect">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                      {printer.badge}
                    </span>
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={printer.image}
                      alt={printer.name}
                      data-ai-hint={printer.hint}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="font-headline text-2xl mb-2 group-hover:text-accent transition-colors">
                          {printer.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(printer.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">({printer.rating})</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">{printer.price}</div>
                      </div>
                    </div>
                    
                    <CardDescription className="mb-6 text-muted-foreground leading-relaxed">
                      {printer.description}
                    </CardDescription>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {printer.specs.map((spec, specIndex) => (
                        <div key={spec.text} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          <div className="p-2 rounded-lg bg-accent/10">
                            <spec.icon className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-sm font-medium">{spec.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <CardFooter className="p-0 mt-auto">
                      <Button
                        className="w-full font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        onClick={() => handleSelectPrinter(printer.name)}
                      >
                        Book a Demo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>

            {/* Enhanced Booking Section */}
            {selectedPrinter && (
              <div ref={bookingRef} className="mt-20">
                <div className="w-full py-16 md:py-20 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500"></div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-6 right-6 z-10 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setSelectedPrinter(null)}
                  >
                    <X className="w-6 h-6" />
                    <span className="sr-only">Close</span>
                  </Button>
                  
                  <div className="container relative z-10">
                    <div className="text-center mb-12">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                        <CheckCircle className="w-4 h-4" />
                        Demo Booking
                      </div>
                      <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl mb-4">
                        Book Your <span className="gradient-text">{selectedPrinter.name}</span> Demo
                      </h2>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                        Experience the power and efficiency of our professional printers firsthand. Schedule a personalized demonstration at your convenience.
                      </p>
                    </div>
                    
                    <div className="w-full max-w-4xl mx-auto h-[700px] rounded-2xl overflow-hidden shadow-2xl border">
                      <iframe
                        src="https://tidycal.com/j-kalachand-co-ltd/book-your-printer-demo?embed=1"
                        className="w-full h-full border-0"
                        loading="lazy"
                        title={`TidyCal Demo Booking for ${selectedPrinter.name}`}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Enhanced Video Showcase */}
        <section id="video-showcase" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Live Demonstrations
              </div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl gradient-text">
                See Excellence in Action
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Watch our comprehensive video demonstrations showcasing the advanced features and exceptional performance of our professional printer lineup.
              </p>
            </div>
            
            <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/agG2ucmOZBU"
                    title="Brother MFC-L6910DN Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/dmqJrXREPmQ"
                    title="Brother MFC-L6710DW Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <Zap className="w-4 h-4" />
                Advanced Technology
              </div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl gradient-text">
                Cutting-Edge Features, Effortless Operation
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our printers combine state-of-the-art technology with intuitive design to deliver unmatched performance and user experience.
              </p>
            </div>
            
            <div className="mx-auto grid max-w-7xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12">
              {features.map((feature, index) => (
                <div key={feature.title} className="group relative">
                  <div className="flex flex-col items-center text-center gap-6 p-8 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
                    <div className={`relative p-6 rounded-2xl ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-8 h-8 ${feature.color} feature-icon-glow`} />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Testimonials Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium">
                <Star className="w-4 h-4" />
                Customer Success
              </div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl gradient-text">
                Trusted by Professionals
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                See what our satisfied customers have to say about their experience with our professional printing solutions.
              </p>
            </div>
            
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-accent">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hero Section Copy (replacing CTA) */}
        <section className="relative w-full h-[100vh] md:h-[130vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://placehold.co/1920x1080/1a1a1a/ffffff?text=Modern+Office+Printing"
              alt="Modern office with professional printing equipment"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Professional Printing Solutions
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-2xl">
                Elevate Your <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Printing Experience</span>
              </h1>
              <p className="mt-6 max-w-[700px] mx-auto text-lg md:text-xl text-white/90 leading-relaxed">
                Discover our latest range of high-performance printers designed for efficiency, quality, and reliability in professional environments.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="flex flex-col gap-6 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-border/40 bg-gradient-to-r from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-900">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 shadow-lg">
            <Printer className="h-5 w-5 text-white" />
          </div>
          <span className="text-sm text-muted-foreground">
            &copy; 2025 JK Printers. All rights reserved.
          </span>
        </div>
        <nav className="sm:ml-auto flex gap-6 items-center">
          <Link href="#" className="text-sm hover:text-accent transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#" className="text-sm hover:text-accent transition-colors relative group">
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#" className="text-sm hover:text-accent transition-colors relative group">
            Terms of Service
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="flex gap-3">
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors transform hover:scale-110">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent transition-colors transform hover:scale-110">
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  )
}