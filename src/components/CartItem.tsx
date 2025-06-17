import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CartItem as CartItemType } from "@/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-full w-full object-cover" 
        />
      </div>
      
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <p className="text-lg font-semibold text-gray-900">
          ${item.price.toFixed(2)}
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          <MinusCircle className="h-4 w-4" />
        </Button>
        
        <span className="w-6 text-center">{item.quantity}</span>
        
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <PlusCircle className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="ml-4 text-right">
        <p className="text-lg font-semibold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="text-red-500 hover:text-red-700 hover:bg-red-50"
        onClick={() => removeFromCart(item.id)}
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
}