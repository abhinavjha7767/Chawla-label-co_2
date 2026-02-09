import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";

// Mock cart items for demonstration (in a real app, this would come from a context/store)
const cartItems = [
  {
    id: 1,
    name: "Woven Labels - Damask",
    quantity: 1000,
    price: 4500, // Price in relevant currency
    image: "/images/product-woven.jpg",
  },
  {
    id: 2,
    name: "Hang Tags - Premium Cardstock",
    quantity: 500,
    price: 3200,
    image: "/images/product-tags.jpg",
  },
];

export default function Cart() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.18; // Assuming 18% tax
  const total = subtotal + tax;

  return (
    <PageLayout
      title="Shopping Cart"
      subtitle="Review your selected items before checkout."
      badge="Checkout"
    >
      <div className="container mx-auto px-6">
        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-6 p-6 bg-card border border-border rounded-xl"
                >
                  <div className="w-24 h-24 bg-muted rounded-lg shrink-0 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground text-xs">
                      Possible Image
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Quantity: {item.quantity} pcs
                        </p>
                      </div>
                      <p className="font-semibold">
                        ₹{item.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-3">
                        {/* Quantity controls could go here */}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 size={16} className="mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                <h3 className="font-serif font-bold text-xl mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6 pb-6 border-b border-border/50">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (18%)</span>
                    <span>₹{tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between mb-8 font-bold text-lg">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>

                <Link to="/checkout">
                  <Button className="w-full h-12 text-base">
                    Proceed to Checkout
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
              <ShoppingCart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
