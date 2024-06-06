import { useContext } from 'react';
import { CartContext } from './CartContext';
import { getProductData } from './StoreData';
import { Link } from 'react-router-dom';

interface CartProductProps {
  id: number;
  quantity: number;
}

const CartProduct = (props: CartProductProps) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  if (!productData) {
    return null;
  }

  return (
    <div className='cart-product'>
      <div className='cart-product-wrapper'>
        <Link className='cart-link' to={`/product/${productData.id}`}>
          <h3>{productData.title}</h3>
          <img src={productData.img} alt={productData.title} />
          <p> Quantity: {quantity}</p>
          <p>£{(quantity * productData.price).toFixed(2)}</p>
          <button onClick={() => cart.deleteFromCart(id)}>Remove</button>
        </Link>
      </div>
    </div>
  );
};

export default CartProduct;
