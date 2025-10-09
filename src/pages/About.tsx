import { Navbar } from "@/components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About SmartMart</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground text-lg mb-6">
            Smart, AI-driven Supermarket Management System designed to make inventory, billing, and customer engagement effortless.
          </p>
          <p className="mb-4">
            SmartMart revolutionizes traditional supermarket operations with cutting-edge AI technology, providing real-time insights and automated processes that enhance both efficiency and customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
