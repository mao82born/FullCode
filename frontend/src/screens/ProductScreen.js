import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Store } from '../Store';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export function ProductScreen() {
    const navigate = useNavigate();
    const params = useParams();
    const { refnum } = params;

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(
                    `/api/products/refnum/${refnum}`
                );
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchData();
    }, [refnum]);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;

    const addToCartHandler = async () => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            window.alert('No hay stock suficiente de este producto.');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...product, quantity },
        });
        navigate('/cart');
    };

    return loading ? (
        <div>Cargando...</div>
    ) : error ? (
        <div>{error}</div>
    ) : (
        <div>
            <Row>
                <Col md={6}>
                    <img
                        className="img-large"
                        src={product.image}
                        alt={product.name}
                    ></img>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h1>{product.name}</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Descripción: {product.description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Precio: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Stock: {product.countInStock}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-grid">
                                <Button
                                    onClick={addToCartHandler}
                                    variant="primary"
                                >
                                    Añadir al carrito
                                </Button>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}></Col>
            </Row>
        </div>
    );
}
