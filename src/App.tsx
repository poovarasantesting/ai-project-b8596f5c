import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "@/components/Navbar";
import ProductsPage from "@/pages/ProductsPage";
import CartPage from "@/pages/CartPage";
import { CartProvider } from "@/context/CartContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="container mx-auto py-8 px-4">
              <Routes>
                <Route path="/" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
            </main>
            <Toaster />
          </div>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}