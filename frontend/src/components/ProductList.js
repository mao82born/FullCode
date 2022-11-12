import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

export function ProductList(props) {
    const { product } = props;
    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    /*const addToCartHandler = async (item) => {
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
    };*/

    return (
        <Card>
            <img
                src={product.image}
                className="img-thumbnail_med"
                alt={product.name}
            />

            <Card.Body>
                {/*<Link to={`/product/${product.refnum}`}>
          <Card.Title>{product.name}</Card.Title>
  </Link>*/}
                <Card.Text>{product.name}</Card.Text>
                <Card.Text>Stock: {product.countInStock}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button
                    onClick={() => navigate(`/admin/product/${product._id}`)}
                >
                    Editar
                </Button>
                <Button>Eliminar</Button>
            </Card.Body>
        </Card>
    );
}
