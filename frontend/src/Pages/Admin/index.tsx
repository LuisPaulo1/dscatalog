import { Switch} from 'react-router-dom';
import Navbar from 'pages/Admin/Navbar'
import PrivateRoute from 'components/PrivateRoute';
import User from './User';

import './styles.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/products">
            <h1>Product CRUD</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <h1>Category CRUD</h1>
          </PrivateRoute>
          <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
            <User />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;