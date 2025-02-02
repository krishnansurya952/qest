import useCartStore from "../store/useCartStore";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCartStore();
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment Successful!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <ul className="mt-4">
        {cart.map((item, index) => (
          <li key={index} className="p-2 border-b">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <Button className="mt-4" onClick={handlePayment}>Complete Payment</Button>
    </div>
  );
}
