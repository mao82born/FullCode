import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { Store } from '../Store';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                products: action.payload.products,
                page: action.payload.page,
                pages: action.payload.pages,
                loading: false,
            };
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

        case 'DELETE_REQUEST':
            return { ...state, loadingDelete: true, successDelete: false };
        case 'DELETE_SUCCESS':
            return {
                ...state,
                loadingDelete: false,
                successDelete: true,
            };
        case 'DELETE_FAIL':
            return { ...state, loadingDelete: false, successDelete: false };

        case 'DELETE_RESET':
            return { ...state, loadingDelete: false, successDelete: false };
        default:
            return state;
    }
};

export function ProductList(props) {
    const { product } = props;
    const navigate = useNavigate();
    const params = useParams(); // /product/:id
    const { id: productId } = params;

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    const { userInfo } = state;

    const [{ loading, error, loadingDelete, successDelete }, dispatch] =
        useReducer(reducer, {
            loading: true,
            error: '',
        });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/products/`, {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                });

                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {}
        };

        if (successDelete) {
            dispatch({ type: 'DELETE_RESET' });
            navigate('/admin/productlist');
        } else {
            fetchData();
        }
    }, [userInfo, successDelete]);

    //Eliminar producto
    const deleteHandler = async (product) => {
        if (window.confirm('¿Desea eliminar el producto?')) {
            try {
                await axios.delete(`/api/products/${product._id}`, {
                    headers: { Authorization: `Bearer ${userInfo.token}` },
                });
                dispatch({ type: 'DELETE_SUCCESS' });
                alert('Producto eliminado.');
                navigate('/admin/productlist');
            } catch (err) {
                dispatch({
                    type: 'DELETE_FAIL',
                });
            }
        }
    };

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
                <Button onClick={() => deleteHandler(product)}>Eliminar</Button>
            </Card.Body>
        </Card>
    );
}
