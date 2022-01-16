import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'Pages/Home';
import Navbar from 'components/Navbar';
import Catalog from 'Pages/Catalog';
import Admin from 'Pages/Admin';
import ProductDetails from 'Pages/ProductDetails';
import Auth from 'Pages/Admin/Auth';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products" exact>
        <Catalog />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails />
      </Route>
      <Redirect from="/admin/auth" to="/admin/auth/login" exact />
      <Route path="/admin/auth">
        <Auth />
      </Route>
      <Redirect from="/admin" to="/admin/products" exact />
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </Router>
);

export default Routes;