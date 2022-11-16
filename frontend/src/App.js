import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { ProductScreen } from './screens/ProductScreen';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import { CartScreen } from './screens/CartScreen';
import { SigninScreen } from './screens/SigninScreen';
import AdminRoute from './components/AdminRoute';
import { ProductListScreen } from './screens/ProductListScreen';
import SalesScreen from './screens/SalesScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ProductNewScreen from './screens/ProductNewScreen';

function App() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const signoutHandler = () => {
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
    };

    return (
        <BrowserRouter>
            <div className="d-flex flex-column site-container">
                <header>
                    <Navbar className="bg-nav-color">
                        <Container>
                            <LinkContainer to="/">
                                <Navbar.Brand>FullGames</Navbar.Brand>
                            </LinkContainer>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto  w-100  justify-content-end">
                                    <Link to="/cart" className="nav-link">
                                        <i className="fas fa-cart-plus"></i>
                                        {cart.cartItems.length > 0 && (
                                            <Badge pill bg="danger">
                                                {cart.cartItems.reduce(
                                                    (a, c) => a + c.quantity,
                                                    0
                                                )}
                                            </Badge>
                                        )}
                                    </Link>
                                    {userInfo ? (
                                        <NavDropdown
                                            title={userInfo.name}
                                            id="basic-nav-dropdown"
                                        >
                                            <LinkContainer to="/">
                                                <NavDropdown.Item>
                                                    Lista de productos
                                                </NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/cart">
                                                <NavDropdown.Item>
                                                    Carrito
                                                </NavDropdown.Item>
                                            </LinkContainer>
                                            <NavDropdown.Divider />
                                            <Link
                                                className="dropdown-item"
                                                to="#signout"
                                                onClick={signoutHandler}
                                            >
                                                Salir
                                            </Link>
                                        </NavDropdown>
                                    ) : (
                                        <Link className="nav-link" to="/signin">
                                            Ingresar
                                        </Link>
                                    )}
                                    {userInfo && userInfo.isAdmin && (
                                        <NavDropdown
                                            title="Admin"
                                            id="basic-nav-dropdown"
                                            className="text-nav"
                                        >
                                            <LinkContainer to="/admin/newproduct">
                                                <NavDropdown.Item>
                                                    Nuevo producto
                                                </NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/admin/productlist">
                                                <NavDropdown.Item>
                                                    Lista de productos
                                                </NavDropdown.Item>
                                            </LinkContainer>
                                            <LinkContainer to="/admin/saleslist">
                                                <NavDropdown.Item>
                                                    Lista de ventas
                                                </NavDropdown.Item>
                                            </LinkContainer>
                                            <NavDropdown.Divider />
                                            <Link
                                                className="dropdown-item"
                                                to="#signout"
                                                onClick={signoutHandler}
                                            >
                                                Salir
                                            </Link>
                                        </NavDropdown>
                                    )}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
                <main>
                    <Container className="mt-3">
                        <Routes>
                            <Route
                                path="/product/:refnum"
                                element={<ProductScreen />}
                            />
                            <Route path="/cart" element={<CartScreen />} />
                            <Route path="/signin" element={<SigninScreen />} />
                            {/*Admin Routes */}
                            <Route
                                path="/admin/newproduct"
                                element={
                                    <AdminRoute>
                                        <ProductNewScreen />
                                    </AdminRoute>
                                }
                            ></Route>
                            <Route
                                path="/admin/productlist"
                                element={
                                    <AdminRoute>
                                        <ProductListScreen />
                                    </AdminRoute>
                                }
                            ></Route>
                            <Route
                                path="/admin/saleslist"
                                element={
                                    <AdminRoute>
                                        <SalesScreen />
                                    </AdminRoute>
                                }
                            ></Route>
                            <Route
                                path="/admin/product/:id"
                                element={
                                    <AdminRoute>
                                        <ProductEditScreen />
                                    </AdminRoute>
                                }
                            ></Route>
                            <Route path="/" element={<HomeScreen />} />
                        </Routes>
                    </Container>
                </main>
                <footer className="text-center bg-nav-color">
                    Todos los derechos reservados ©FullCode
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
