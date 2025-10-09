import { Navbar } from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-muted-foreground text-lg">
          Get in touch with our team for support or inquiries.
        </p>
      </div>
    </div>
  );
}
