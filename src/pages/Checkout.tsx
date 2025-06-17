import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, CreditCard, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

const sampleCartItems = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500"
  }
];

export default function Checkout() {
  const [step, setStep] = useState<"details" | "shipping" | "payment">("details");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const subtotal = sampleCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === "details") {
      setStep("shipping");
    } else if (step === "shipping") {
      setStep("payment");
    } else {
      setIsProcessing(true);
      
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        toast({
          title: "Order placed successfully!",
          description: "You will receive a confirmation email shortly.",
          variant: "default",
        });
        navigate("/order-confirmation");
      }, 2000);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      {/* Checkout Steps */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className={`rounded-full p-2 ${step === "details" || step === "shipping" || step === "payment" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
            <Check className="h-4 w-4" />
          </div>
          <span className="mx-2 text-sm font-medium">Customer Details</span>
        </div>
        <Separator className="w-10" />
        <div className="flex items-center">
          <div className={`rounded-full p-2 ${step === "shipping" || step === "payment" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
            <Truck className="h-4 w-4" />
          </div>
          <span className="mx-2 text-sm font-medium">Shipping</span>
        </div>
        <Separator className="w-10" />
        <div className="flex items-center">
          <div className={`rounded-full p-2 ${step === "payment" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
            <CreditCard className="h-4 w-4" />
          </div>
          <span className="mx-2 text-sm font-medium">Payment</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Checkout Form */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                {step === "details" && "Personal Information"}
                {step === "shipping" && "Shipping Information"}
                {step === "payment" && "Payment Details"}
              </CardTitle>
              <CardDescription>
                {step === "details" && "Please enter your contact details"}
                {step === "shipping" && "Choose your preferred shipping method"}
                {step === "payment" && "Secure payment information"}
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                {step === "details" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(123) 456-7890" required />
                    </div>
                  </>
                )}

                {step === "shipping" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="123 Main St" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="New York" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="NY" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="10001" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" placeholder="United States" required />
                      </div>
                    </div>
                    <div className="space-y-3 pt-3">
                      <Label>Shipping Method</Label>
                      <RadioGroup defaultValue="standard">
                        <div className="flex items-center space-x-2 border p-3 rounded-md">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="flex-1">Standard Shipping (3-5 business days)</Label>
                          <span className="font-medium">$9.99</span>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express" className="flex-1">Express Shipping (1-2 business days)</Label>
                          <span className="font-medium">$19.99</span>
                        </div>
                      </RadioGroup>
                    </div>
                  </>
                )}

                {step === "payment" && (
                  <>
                    <div className="space-y-3">
                      <Label>Payment Method</Label>
                      <RadioGroup defaultValue="card">
                        <div className="flex items-center space-x-2 border p-3 rounded-md">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1 flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            Credit/Debit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="flex-1">PayPal</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiration Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input id="nameOnCard" placeholder="John Doe" required />
                    </div>
                  </>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {step !== "details" && (
                  <Button 
                    variant="outline" 
                    onClick={(e) => {
                      e.preventDefault();
                      setStep(step === "payment" ? "shipping" : "details");
                    }}
                  >
                    Back
                  </Button>
                )}
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : step === "payment" ? "Place Order" : "Continue"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        {/* Right Column: Order Summary */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>
                {sampleCartItems.length} items in your cart
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Cart Items */}
              {sampleCartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-16 w-16 rounded-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              
              <Separator />
              
              {/* Totals */}
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}