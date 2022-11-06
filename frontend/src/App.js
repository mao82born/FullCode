import { data } from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">FullGames</a>
      </header>
      <main>
        <h1>Feactured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.id}>
              <a href={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.id}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
