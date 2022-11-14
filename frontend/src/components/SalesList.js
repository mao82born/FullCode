import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

export function SalesList(props) {
    const { sale } = props;
    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    return (
        <Card>
            <Card.Body>
                <Card.Text>{sale._id}</Card.Text>
                <Card.Text>Fecha: {sale.dateSale}</Card.Text>
                <Card.Text>${sale.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}
