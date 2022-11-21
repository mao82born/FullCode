import { useContext, useReducer, useState } from 'react';
import { Store } from '../Store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'CREATE_REQUEST':
            return { ...state, loadingCreate: true };
        case 'CREATE_SUCCESS':
            return {
                ...state,
                loadingCreate: false,
            };
        case 'CREATE_FAIL':
            return { ...state, loadingCreate: false };
        default:
            return state;
    }
};

export function CartScreen() {
    const navigate = useNavigate();
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    const { userInfo } = state;

    const [{ loading, error, loadingUpdate }, dispatch] = useReducer(reducer, {
        loading: true,
        error: '',
    });

    const [dateSale, setDateSale] = useState('');
    const [refnum, setRefNum] = useState('');
    const [price, setPrice] = useState('');
    const [docUser, setDocUser] = useState('');
    const [quantity, setQuantity] = useState('');
    //const [countInStock, setCountInStock] = useState('');

    //Añadir la venta del carrito a la base de datos
    const checkoutHandler = async (e) => {
        e.preventDefault();
        //alert('Compra realizada con exito.');
        try {
            dispatch({ type: 'UPDATE_REQUEST' });
            await axios.post(
                `/api/sales`,
                {
                    price: cartItems.reduce,

                    descriptionSale: {
                        refnum: cartItems.refnum,
                        quantity: cartItems.quantity,
                    },
                    //countInStock,
                    //description,
                },
                {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                }
            );
            dispatch({
                type: 'UPDATE_SUCCESS',
            });
            //toast.success('Product updated successfully');
            navigate('/admin/productlist');
        } catch (err) {
            //toast.error(getError(err));
            dispatch({ type: 'UPDATE_FAIL' });
        }
    };

    //Aumentar cantidad del producto a comprar
    const updateCartHandler = async (item, quantity) => {
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

    //Disminuir cantidad del producto a comprar
    const removeItemHandler = (item) => {
        ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    };

    //Vaciar el carrito
    const clearHandler = () => {
        ctxDispatch({ type: 'CART_CLEAR' });
        localStorage.removeItem('userInfo');
    };

    return (
        <div>
            <h1>Carrito de compras</h1>
            <Row>
                <Col md={8}>
                    {cartItems.length === 0 ? (
                        <MessageBox>
                            El carrito está vacio.{' '}
                            <Link to="/">Ir a comprar</Link>
                        </MessageBox>
                    ) : (
                        <ListGroup>
                            {cartItems.map((item) => (
                                <ListGroup.Item key={item._id}>
                                    <Row className="align-items-center">
                                        <Col md={4}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="img-fluid rounded img-thumbnail"
                                            ></img>{' '}
                                            <Link
                                                to={`/product/${item.refnum}`}
                                            >
                                                {item.name}
                                            </Link>
                                        </Col>
                                        <Col md={3}>
                                            {/*Botón para restar cantidad producto*/}
                                            <Button
                                                onClick={() =>
                                                    updateCartHandler(
                                                        item,
                                                        item.quantity - 1
                                                    )
                                                }
                                                variant="light"
                                                disabled={item.quantity === 1}
                                            >
                                                {/*Boton para sumar productos*/}
                                                <img
                                                    src="../boton-menos.png"
                                                    alt="logo_fullgames"
                                                    className="icon-mini"
                                                ></img>
                                            </Button>{' '}
                                            <span>{item.quantity}</span>{' '}
                                            <Button
                                                onClick={() =>
                                                    updateCartHandler(
                                                        item,
                                                        item.quantity + 1
                                                    )
                                                }
                                                variant="light"
                                                disabled={
                                                    item.quantity ===
                                                    item.countInStock
                                                }
                                            >
                                                <img
                                                    src="../boton-mas.png"
                                                    alt="logo_fullgames"
                                                    className="icon-mini"
                                                ></img>
                                            </Button>
                                        </Col>
                                        <Col md={3}>$ {item.price}</Col>
                                        <Col md={2}>
                                            {/*Boton para eliminar productos del carrito*/}
                                            <Button
                                                onClick={() =>
                                                    removeItemHandler(item)
                                                }
                                                variant="light"
                                            >
                                                <img
                                                    src="../basura.png"
                                                    alt="logo_fullgames"
                                                    className="icon-mini"
                                                ></img>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                {/**Total articulos y valor total de los productos */}
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>
                                        Total:&nbsp;
                                        {cartItems.reduce(
                                            (a, c) => a + c.quantity,
                                            0
                                        )}{' '}
                                        articulo(s) <br />${' '}
                                        {cartItems.reduce(
                                            (a, c) => a + c.price * c.quantity,
                                            0
                                        )}
                                    </h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-grid">
                                        {/**Botón de compra */}
                                        <Button
                                            onClick={checkoutHandler}
                                            type="button"
                                            variant="primary"
                                            disabled={cartItems.length === 0}
                                        >
                                            Comprar
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-grid">
                                        {/**Botón vaciar carrito */}
                                        <Button
                                            onClick={clearHandler}
                                            type="button"
                                            variant="primary"
                                            disabled={cartItems.length === 0}
                                        >
                                            Vaciar carrito
                                        </Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
