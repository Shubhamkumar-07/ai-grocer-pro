import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ShoppingCart, TrendingUp, Bell, Star, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Smart, AI-driven Supermarket Management
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Effortless inventory tracking, intelligent billing, and seamless customer engagement—all powered by AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-accent-light text-accent-foreground">
                <Link to="/products">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Start Shopping
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SmartMart?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of supermarket management with our AI-powered platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>AI Inventory Tracking</CardTitle>
                <CardDescription>
                  Real-time stock monitoring with intelligent predictions to prevent shortages
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Smart Alerts</CardTitle>
                <CardDescription>
                  Get notified about low stock, fast-selling items, and predicted stockout dates
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Fast Billing</CardTitle>
                <CardDescription>
                  Quick and accurate billing system with instant invoice generation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Customer Feedback</CardTitle>
                <CardDescription>
                  Automated feedback collection to continuously improve service quality
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Enterprise-grade security with reliable data protection and backup
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle>Seamless Shopping</CardTitle>
                <CardDescription>
                  User-friendly interface for customers to browse and purchase products easily
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Shopping Experience?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust SmartMart for their daily needs
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent-light text-accent-foreground">
            <Link to="/auth">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
