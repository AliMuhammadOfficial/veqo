import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            Newsletter
          </Badge>
          <h2 className="text-4xl font-bold text-primary-foreground">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-primary-foreground/90">
            Stay updated with our latest collections and exclusive offers.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background border-0"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
