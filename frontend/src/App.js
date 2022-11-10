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
import NewProductScreen from './screens/NewProductScreen';
import AdminRoute from './components/AdminRoute';
import { ProductListScreen } from './screens/ProductListScreen';
import VentasScreen from './screens/SalesScreen';

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
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>FullGames</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Perfil de usuario</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Lista de compra</NavDropdown.Item>
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
                <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <LinkContainer to="/admin/newproduct">
                    <NavDropdown.Item>Nuevo producto</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Lista de productos</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/saleslist">
                    <NavDropdown.Item>Lista de ventas</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:refnum" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              {/*Admin Routes */}
              <Route
                path="/admin/newproduct"
                element={
                  <AdminRoute>
                    <NewProductScreen />
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
                    <VentasScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className="text-center">Todos los derechos reservados</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
