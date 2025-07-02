
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Printer, Download, ExternalLink } from 'lucide-react'

export default function SupportPage() {
  const products = [
    {
      name: 'Brother MFC-L6910DN',
      manualHref: '/placeholder-manual.pdf',
      driverHref: 'https://www.brother.ae/en/support/mfc-l6910dn/downloads',
    },
    {
      name: 'Brother MFC-L6710DW',
      manualHref: '/placeholder-manual.pdf',
      driverHref: 'https://www.brother.ae/en/support/mfc-l6710dw/downloads',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Printer className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">JK Printers</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
        </nav>
      </header>
      <main className="flex-1 container mx-auto py-12 md:py-24 lg:py-32 px-4 md:px-6">
        <div className="space-y-4 text-center mb-16">
            <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">After Sales Support</h1>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find resources, drivers, and manuals for your Brother printers.
            </p>
        </div>
        <div className="space-y-16">
          {products.map((product) => (
            <div key={product.name}>
              <h2 className="text-2xl font-bold font-headline tracking-tight text-center mb-8">{product.name}</h2>
              <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                  <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                          <CardTitle className="font-headline flex items-center gap-3">
                              <Download className="w-6 h-6 text-accent"/>
                              Manuals & Guides
                          </CardTitle>
                          <CardDescription>
                              Download the user manual for your printer to get detailed instructions on setup and operation.
                          </CardDescription>
                      </CardHeader>
                      <CardContent>
                          <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                              <Link href={product.manualHref} target="_blank" rel="noopener noreferrer">
                                  Download Manual (PDF)
                              </Link>
                          </Button>
                      </CardContent>
                  </Card>
                  <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                          <CardTitle className="font-headline flex items-center gap-3">
                              <ExternalLink className="w-6 h-6 text-accent"/>
                              Downloads & Drivers
                          </CardTitle>
                          <CardDescription>
                              Get the latest drivers, utilities, and firmware for your {product.name}.
                          </CardDescription>
                      </CardHeader>
                      <CardContent>
                          <Button asChild className="w-full">
                              <Link href={product.driverHref} target="_blank" rel="noopener noreferrer">
                                  Go to Downloads Page
                              </Link>
                          </Button>
                      </CardContent>
                  </Card>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-border/40">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 @Jkalachand. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
