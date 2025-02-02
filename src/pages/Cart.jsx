import useCartStore from "../store/useCartStore";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useCartStore((state) => state.cart); // Fetching cart state
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const navigate = useNavigate();

  console.log("Cart Items:", cart); // Debugging log

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="mt-4">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between p-2 border-b">
              <span>{item.name} - ${item.price}</span>
              <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      )}
      <Button className="mt-4" onClick={() => navigate("/checkout")}>
        Proceed to Checkout
      </Button>
    </div>
  );
}
