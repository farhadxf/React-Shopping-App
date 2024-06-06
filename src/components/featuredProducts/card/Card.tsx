import './Card.scss';
import { useNavigate } from 'react-router-dom';

// Define the interface for the item prop
interface Items {
  id: number;
  img: string;
  title: string;
  isNew?: boolean;
  price: number;
  oldPrice?: number;
  discount?: number;
  sex: string[];
}

interface CardProps {
  item: Items; // This uses the Item interface
}

const Card: React.FC<CardProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className='card' onClick={() => navigate(`/product/${item.id}`)}>
      <div className='img-container'>
        <div className='img'>
          {item.isNew && <span>New Arrival </span>}
          <img src={item.img} alt={item.title} />
          {item.discount && <span className='discount'>{item.discount}% discount</span>}
        </div>
      </div>
      <span className='title'>{item.title}</span>
      <div className='prices'>
        {item.oldPrice && <span className='old-price'>£{item.oldPrice}</span>}
        <span className='new-price'>£{item.price}</span>
      </div>
    </div>
  );
};

export default Card;
