import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

export function Product(props) {
    const { product } = props;

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    //Añade producto al carrito
    const addToCartHandler = async (item) => {
        const existItem = cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (data.countInStock < quantity) {
            window.alert('No hay productos.');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity },
        });
    };

    return (
        <Card>
            <Link to={`/product/${product.refnum}`} className="products">
                <img
                    src={product.image}
                    className="card-img-top imgProducto"
                    alt={product.name}
                />
            </Link>
            <Card.Body>
                <Link
                    to={`/product/${product.refnum}`}
                    className="text-decoration"
                >
                    <Card.Text>{product.name}</Card.Text>
                </Link>
                <Card.Text className="text-margin">${product.price}</Card.Text>
                <div className="center">
                    {product.countInStock === 0 ? (
                        <Button variant="light" disabled>
                            No disponible
                        </Button>
                    ) : (
                        <Button onClick={() => addToCartHandler(product)}>
                            Añadir al carrito
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
