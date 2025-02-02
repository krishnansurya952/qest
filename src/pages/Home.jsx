import useCartStore from "../store/useCartStore";
import { Button } from "../components/ui/Button";

const services = [
  { id: 1, name: "Fitness Class", price: 20 },
  { id: 2, name: "Therapy Session", price: 50 },
  { id: 3, name: "Workshop", price: 30 },
];

export default function Home() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Select a Service</h1>
      <ul className="mt-4">
        {services.map((service) => (
          <li key={service.id} className="flex justify-between p-2 border-b">
            <span>{service.name} - ${service.price}</span>
            <Button onClick={() => {
              addToCart(service);
              console.log("Cart Updated:", cart);
            }}>
              Add to Cart
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
