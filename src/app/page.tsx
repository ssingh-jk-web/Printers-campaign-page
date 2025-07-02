
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
      specs: [
        { icon: Printer, text: 'Monochrome Laser' },
        { icon: Zap, text: 'Up to 50 ppm' },
        { icon: Layers, text: 'Print, Scan, Copy, Fax' },
        { icon: Wifi, text: 'Wireless & Gigabit Ethernet' },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="#" className="flex items-center justify-center gap-2">
          <Printer className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">JK Printers</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Support
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="home" className="relative w-full h-[100vh] md:h-[130vh] overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1095441378?h=47c3ea0dfa&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
              className="absolute top-1/2 left-1/2 w-[178vh] min-w-full h-[80vw] min-h-full -translate-x-1/2 -translate-y-1/2"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground px-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                Elevate Your Printing Experience
                </h1>
                <p className="mt-4 max-w-[700px] text-lg md:text-xl text-muted-foreground text-white">
                Discover our latest range of high-performance printers designed for efficiency and quality.
                </p>
            </div>
        </section>

        <section
          id="printers"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                  Featured Printers
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the perfect printer that meets your demands for
                  quality, speed, and versatility.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
              {printers.map(printer => (
                <Card key={printer.name} className="bg-card bg-gray-900 border-border overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full flex flex-col">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={printer.image}
                      alt={printer.name}
                      data-ai-hint={printer.hint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div>
                      <CardTitle className="font-headline text-2xl mb-2">{printer.name}</CardTitle>
                      <CardDescription className="mb-4 text-muted-foreground">{printer.description}</CardDescription>
                      <ul className="space-y-3 text-sm mt-6">
                        {printer.specs.map(spec => (
                          <li key={spec.text} className="flex items-center gap-3">
                            <spec.icon className="w-5 h-5 text-accent" />
                            <span className="text-foreground">{spec.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <CardFooter className="p-0 mt-auto pt-6">
                      <Button
                        className="w-full font-bold bg-accent text-white lg:text-black md:text-black hover:bg-accent/90"
                        onClick={() =>
                          handleSelectPrinter(printer.name)
                        }
                      >
                        Book a Demo
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
            {selectedPrinter && (
              <div ref={bookingRef} className="mt-16">
                <div className="w-full py-12 md:py-16 bg-card rounded-lg shadow-xl border relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-10"
                    onClick={() => setSelectedPrinter(null)}
                  >
                    <X className="w-6 h-6" />
                    <span className="sr-only">Close</span>
                  </Button>
                  <div className="container">
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-center mb-8">
                      Book a Demo for {selectedPrinter.name}
                    </h2>
                    <div className="w-full h-[700px] rounded-xl overflow-hidden shadow-2xl">
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

        <section id="video-showcase" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                  See It in Action
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Watch our videos to see the high-quality performance and features of our professional printers.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
              <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/agG2ucmOZBU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/dmqJrXREPmQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                  Advanced Features, Simple Operation
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our printers are packed with cutting-edge technology to streamline your workflow and deliver professional results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-start gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 mt-12">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-muted rounded-full p-4">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl text-white font-bold">High-Speed Printing</h3>
                <p className="text-muted-foreground">
                  Blazing fast output to meet your deadlines.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-muted rounded-full p-4">
                  <Paintbrush className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold">Vivid Color Accuracy</h3>
                <p className="text-muted-foreground">
                  Exceptional color reproduction for stunning visuals.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-muted rounded-full p-4">
                  <Layers className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-bold">Multi-Functionality</h3>
                <p className="text-muted-foreground">
                  Print, scan, and copy with one versatile device.
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-muted rounded-full p-4">
                  <Wifi className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Wireless Connectivity</h3>
                <p className="text-muted-foreground">
                  Print from anywhere with Wi-Fi and mobile support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-cta" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">
                Ready to Upgrade Your Printing?
                </h2>
                <p className="mt-4 max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                Contact us today to learn more about our printers and schedule a demo.
                </p>
                <div className="mt-6">
                    <Button className='bg-orange-500 text-white hover:bg-orange-600' size="lg" onClick={() => handleSelectPrinter(printers[0].name)}>
                        Book a Demo
                    </Button>
                </div>
            </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border/40">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 @Jkalachand. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="#" className="text-xs hover:underline underline-offset-4">About Us</Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">Privacy</Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">Terms</Link>
            <div className="flex gap-2">
                <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="h-4 w-4" /></Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground"><Facebook className="h-4 w-4" /></Link>
            </div>
        </nav>
      </footer>
    </div>
  )
}
