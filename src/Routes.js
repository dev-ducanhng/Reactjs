
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProduct from "./pages/admin/product/list";
import AddProductForm from "./pages/admin/product/add";
import EditProductForm from "./pages/admin/product/edit";
import AdminLayout from "./layouts/AdminLayout";
import NotFound from "./notfound/notFound";
import WebLayout from "./layouts/WebLayout";
import Signin from "./pages/web/signin";
import Signup from "./pages/web/signup";
import ShowProduct2 from "./pages/web/showProduct2";
import ShowProducts from "./pages/web/showProducts";
import AuthLayout from "./layouts/AuthLayout";
import ListCategory from "./pages/admin/category/list"
import ShowProductByCate from "./pages/web/showProductByCate"
import EditCategoryForm from "./pages/admin/category/edit";
import AddCategoryForm from "./pages/admin/category/add";
import ContacLayout from "./layouts/ContacLayout";
const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
      
        <Route path="/admin">
          <AdminLayout>
            <Switch>
              <Route exact path="/admin/product">
                <ListProduct {...props} />
              </Route>
              <Route exact path="/admin/product/add">
                <AddProductForm {...props} />
              </Route>
              <Route exact path="/admin/product/:id/edit">
                <EditProductForm {...props} />
              </Route>
              <Route exact path="/admin/category">
                <ListCategory {...props} />
              </Route>
              <Route exact path="/admin/category/add">
                <AddCategoryForm {...props} />
              </Route>
              <Route exact path="/admin/category/:id/edit">
                <EditCategoryForm {...props} />
              </Route>
            </Switch>
          </AdminLayout>
        </Route>

        <Route path="/auth">
          <AuthLayout>
            <Switch>
              <Route exact path="/auth/signup">
                <Signup {...props}/>
              </Route>
              <Route exact path="/auth/signin">
                <Signin {...props}/>
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        
        <Route path="/">
          <WebLayout {...props}>
            <Switch>
              <Route exact path="/">
                <ShowProducts {...props} />
              </Route>
              <Route exact path="/detail/:id">
                <ShowProduct2 {...props} />
              </Route>
              <Route exact path="/category/:id">
                <ShowProductByCate {...props} />
              </Route>
              <Route exact path="/contac">
                <ContacLayout  />
              </Route>
            </Switch>
          </WebLayout>
        </Route>
       
        
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
