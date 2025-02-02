import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (service) =>
    set((state) => ({
      cart: [...state.cart, service],
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
