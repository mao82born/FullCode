import { Link } from 'react-router-dom';
import { data } from '../data';

export function HomeScreen() {
  return (
    <div>
      <h1>Feactured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.id}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
