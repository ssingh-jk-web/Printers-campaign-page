import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Printer, Download, ExternalLink, Star, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

export default function SupportPage() {
  const products = [
    {
      name: 'Brother MFC-L6910DN',
      manualHref: '/placeholder-manual.pdf',
      driverHref: 'https://www.brother.ae/en/support/mfc-l6910dn/downloads',
      description: 'High-performance monochrome laser printer for demanding office environments',
      features: ['52 ppm printing', 'Advanced security', 'Multi-function capabilities'],
    },
    {
      name: 'Brother MFC-L6710DW',
      manualHref: '/placeholder-manual.pdf',
      driverHref: 'https://www.brother.ae/en/support/mfc-l6710dw/downloads',
      description: 'Versatile monochrome laser printer for busy workgroups',
      features: ['50 ppm printing', 'Wireless connectivity', 'Flexible paper handling'],
    },
  ]

  const supportFeatures = [
    {
      icon: Download,
      title: 'Quick Downloads',
      description: 'Access manuals, drivers, and utilities instantly',
    },
    {
      icon: CheckCircle,
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance',
    },
    {
      icon: Star,
      title: 'Expert Guidance',
      description: 'Professional setup and troubleshooting help',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Enhanced Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 glass-effect">
        <Link href="/" className="flex items-center justify-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Printer className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl gradient-text">JK Printers</span>
        </Link>
        <nav className="ml-auto flex gap-6 items-center">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Support
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Professional Support
              </div>
              <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl gradient-text">
                Comprehensive After-Sales Support
              </h1>
              <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the most out of your Brother printers with our extensive support resources, expert guidance, and comprehensive documentation.
              </p>
            </div>

            {/* Support Features */}
            <div className="grid gap-8 md:grid-cols-3 mb-16">
              {supportFeatures.map((feature, index) => (
                <div key={feature.title} className="group">
                  <div className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="p-4 rounded-2xl bg-accent/10 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Support Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16">
              {products.map((product, index) => (
                <div key={product.name} className="space-y-8">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold font-headline tracking-tight gradient-text">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                      <CardHeader className="pb-4">
                        <CardTitle className="font-headline flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-accent/10">
                            <Download className="w-6 h-6 text-accent" />
                          </div>
                          Manuals & Guides
                        </CardTitle>
                        <CardDescription className="leading-relaxed">
                          Download comprehensive user manuals with detailed setup instructions, troubleshooting guides, and operational procedures.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          <Link href={product.manualHref} target="_blank" rel="noopener noreferrer">
                            Download Manual (PDF)
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                      <CardHeader className="pb-4">
                        <CardTitle className="font-headline flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <ExternalLink className="w-6 h-6 text-blue-500" />
                          </div>
                          Downloads & Drivers
                        </CardTitle>
                        <CardDescription className="leading-relaxed">
                          Access the latest drivers, software utilities, firmware updates, and compatibility tools for optimal performance.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          <Link href={product.driverHref} target="_blank" rel="noopener noreferrer">
                            Visit Downloads Page
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                Need Additional Help?
              </div>
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-white drop-shadow-lg">
                Our Expert Team is Here to Help
              </h2>
              <p className="max-w-[600px] mx-auto text-white/90 md:text-xl leading-relaxed">
                Can't find what you're looking for? Our technical support specialists are ready to provide personalized assistance for all your printing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold"
                >
                  Contact Support Team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Live Chat Support
                </Button>
              </div>
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
      </footer>
    </div>
  )
}