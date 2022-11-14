import { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Product } from '../components/Product';
import { ProductList } from '../components/ProductList';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import { Button } from 'react-bootstrap';
import { SalesList } from '../components/SalesList';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
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

export function SalesListScreen() {
    const [{ loading, error, sales }, dispatch] = useReducer(reducer, {
        sales: [],
        loading: true,
        error: '',
    });
    //const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { state } = useContext(Store);
    const { userInfo } = state;

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/sales');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
            //setProducts(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Row>
                <Col>
                    <h1>Ventas</h1>
                </Col>
            </Row>
            <div className="ventas">
                {loading ? (
                    <div>Cargando...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <Row>
                        Comprobando
                        {sales.map((sale) => (
                            <Col
                                key={sales._id}
                                sm={6}
                                md={4}
                                lg={3}
                                className="mb-3"
                            >
                                Prueba<SalesList sale={sale}></SalesList>
                            </Col>
                        ))}
                        --Terminando
                    </Row>
                )}
            </div>
        </div>
    );
}
