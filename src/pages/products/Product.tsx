import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import AllData from '../../components/data/AllData';
import { CartContext } from './Cart/CartContext';

function Product() {
  const cart = useContext(CartContext);

  const { id } = useParams();

  const [selectedImg, setSelectedImg] = useState(0);

  const product = AllData.find((item) => item.id === (id ? parseInt(id) : 0));

  if (!product) {
    return <div>Product not found</div>;
  }

  const Images = [product.img, product.img1];
  const productQuantity = cart.getProductQuantity(product.id);
  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          {product.img && <img src={product.img} alt='' onClick={() => setSelectedImg(0)} />}
          {product.img1 && <img src={product.img1} alt='' onClick={() => setSelectedImg(1)} />}
        </div>
        <div className='main-img'>
          <img src={Images[selectedImg]} alt={product.title} />
        </div>
      </div>

      <div className='right'>
        <h1>{product.title}</h1>
        <span>£{product.price}</span>
        <div className='quantity'>
          <div className='quantity-btn'>
            <button onClick={() => cart.addOneToCart(product.id as number)}>+</button>
            <span> {productQuantity}</span>
            <button onClick={() => cart.removeOneFromCart(product.id as number)}>-</button>
          </div>
        </div>
        <div className='item'>
          <FavoriteBorderOutlined />
          <button>add to favorite list</button>
        </div>

        <div className='desc-wrapper'>
          <h2>{product.desTitle}</h2>
          <p>{product.des}</p>
          <div className='des-info'>
            {product.sex.map((s) => (
              <span key={s}>{s}</span>
            ))}
            <span>{product.size}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
