import { Package, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function OrderConfirmation() {
  // Generate a random order number
  const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
  return (
    <div className="container mx-auto py-16 px-4 md:px-6 max-w-3xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground">
          Thank you for your purchase. We're processing your order now.
        </p>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Order #{orderNumber}
          </CardTitle>
          <CardDescription>
            Placed on {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Order Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Premium Wireless Headphones × 1</span>
                <span className="font-medium">$199.99</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Organic Cotton T-Shirt × 2</span>
                <span className="font-medium">$59.98</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">$259.97</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">$9.99</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium">$18.20</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>$288.16</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Shipping Address</h3>
              <address className="not-italic text-muted-foreground">
                John Doe<br />
                123 Main St<br />
                New York, NY 10001<br />
                United States
              </address>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Shipping Method</h3>
              <p className="text-muted-foreground">Standard Shipping (3-5 business days)</p>
              <p className="text-sm mt-4">
                You will receive a shipping confirmation email with tracking information once your order ships.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center space-y-4">
        <p className="text-muted-foreground">
          Questions about your order? <a href="#" className="text-primary underline">Contact our support team</a>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">Continue Shopping</Link>
          </Button>
          <Button variant="outline">
            <Link to="/account">View Order History</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}