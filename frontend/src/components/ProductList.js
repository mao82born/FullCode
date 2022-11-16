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

    return (
        <Card>
            <img
                src={product.image}
                className="img-thumbnail_med"
                alt={product.name}
            />

            <Card.Body>
                <Card.Text className="text-margin">{product.name}</Card.Text>
                <Card.Text className="text-margin">
                    Stock: {product.countInStock}
                </Card.Text>
                <Card.Text className="text-margin">${product.price}</Card.Text>
                <Button
                    onClick={() => navigate(`/admin/product/${product._id}`)}
                >
                    Editar
                </Button>
                &nbsp;
                <Button>Eliminar</Button>
            </Card.Body>
        </Card>
    );
}
