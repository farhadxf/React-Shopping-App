import { createContext, useState, ReactNode } from 'react';
import { getProductData } from './StoreData';

interface CartContextValue {
  items: { id: number; quantity: number }[];
  getProductQuantity: (id: number) => number;
  addOneToCart: (id: number) => void;
  removeOneFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  getTotalCost: () => number;
}

// Create a context with all the initial values
export const CartContext = createContext({
  items: [],
  getProductQuantity: () => 0,
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => 0,
} as CartContextValue);

// Props for the CartProvider component
interface CartProviderProps {
  children: ReactNode; // Children components to be wrapped by CartProvider
}

// State to manage cart items
export function CartProvider({ children }: CartProviderProps) {
  const [cartProducts, setCartProducts] = useState<{ id: number; quantity: number }[]>([]);

  // to get the quantity of a product in the cart
  function getProductQuantity(id: number) {
    const quantity = cartProducts.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  // to add one unit of a product to the cart
  function addOneToCart(id: number) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      //if product is not in cart the cart add with quantity 1
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // If product is already in cart, increase its quantity by 1
      setCartProducts(
        cartProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product))
      );
    }
  }

  // remove a product from the cart
  function removeOneFromCart(id: number) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      // If quantity is 1, remove the product from cart completely
      deleteFromCart(id);
    } else {
      // If quantity is more than 1, decrease its quantity by 1
      setCartProducts(
        cartProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity - 1 } : product))
      );
    }
  }

  // to delete a product completely from the cart
  function deleteFromCart(id: number) {
    // Filter out the product with the given id from cart
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  // calculate the total cost of all items in the cart
  function getTotalCost(): number {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      if (productData) {
        totalCost += productData.price * cartItem.quantity;
      }
    });
    return totalCost;
  }

  // Context value to be provided to child components
  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };
  // Return the CartContext.Provider with context value and children components
  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}

export default CartProvider;
