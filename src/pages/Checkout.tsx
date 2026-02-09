import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Truck, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <PageLayout
      title="Checkout"
      subtitle="Complete your order securely."
      badge="Payment"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Checkout Steps */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <Truck size={20} />
                </div>
                <h3 className="font-bold text-lg">Shipping Information</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-medium">Address</label>
                  <Input placeholder="123 Label Street" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">City</label>
                  <Input placeholder="New York" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Postal Code</label>
                  <Input placeholder="10001" />
                </div>
              </div>
            </motion.div>

            {/* Payment Info - Simplified for demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <CreditCard size={20} />
                </div>
                <h3 className="font-bold text-lg">Payment Details</h3>
              </div>

              <div className="p-4 border border-border/50 rounded-lg bg-muted/30 text-center">
                <p className="text-muted-foreground text-sm">
                  Payment integration would appear here (Stripe, PayPal, etc.)
                </p>
              </div>
            </motion.div>
          </div>

          {/* Order Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h3 className="font-serif font-bold text-xl mb-6">Your Order</h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-border/50">
                <div className="flex justify-between text-sm">
                  <span>Woven Labels - Damask</span>
                  <span className="font-medium">₹4,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Hang Tags - Premium</span>
                  <span className="font-medium">₹3,200</span>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹7,700</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>₹1,386</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="flex justify-between mb-8 font-bold text-lg pt-4 border-t border-border">
                <span>Total</span>
                <span>₹9,086</span>
              </div>

              <Button className="w-full h-12 text-base gap-2">
                <CheckCircle size={18} />
                Complete Order
              </Button>

              <div className="mt-4 text-center">
                <Link
                  to="/cart"
                  className="text-sm text-primary hover:underline"
                >
                  Return to Cart
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
