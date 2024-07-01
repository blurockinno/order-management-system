import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,

} from "react-router-dom";

import OrderManagement from "./pages/orderManagement/OrderManagement";
import Order from "./pages/orderManagement/order/Order";
import Om_Dashboard from "./pages/orderManagement/om_dashboard/Om_Dashboard";
import OrderCalendar from "./pages/orderManagement/order/calendar/OrderCalendar";
import OrderCaters from "./pages/orderManagement/order/OrderCaters";

import OrderDetails from "./pages/orderManagement/order/OrderDetails";
import Inventory from "./pages/orderManagement/inventory/Inventory";
import Customer from "./pages/orderManagement/customer/Customer";
import ActiveOrder from "./pages/orderManagement/order/ActiveOrder";
import { OrderDataContextProvider } from "./context/OrderdataContext";
import CustomerProfilePage from "./pages/orderManagement/customer/CustomerProfilePage";

import AllRecipes from "./pages/orderManagement/recipes/AllRecipes";
import CreateNewRecipe from "./pages/orderManagement/recipes/CreateNewRecipe";
import GeneratePurchaseDetails from "./pages/orderManagement/purchase/GeneratePurchaseDetails";
import SeeMoreDetailsOfRecipe from "./pages/orderManagement/recipes/SeeMoreDetailsOfRecipe";
import Purchase from "./pages/orderManagement/purchase/Purchase";


function App() {
  return (
    <OrderDataContextProvider>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={"/orderManagement-dashboard"} />}
        />

        {/* // Dashboard for the Order  Management */}
        <Route path="/orderManagement-dashboard" element={<OrderManagement />}>
          <Route path="" element={<Navigate to={"order"} />} />
          <Route path="home" element={<Om_Dashboard />} />
          <Route path="order" element={<Order />} />
          <Route path="orderdetails/:id" element={<OrderDetails />} />
          {/* Add the route for ActiveOrder here */}
          <Route path="activeOrder" element={<ActiveOrder />} />
          <Route path="neworder" element={<OrderCaters />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="order/calendar" element={<OrderCalendar />} />
          <Route path="customer" element={<Customer />} />
          {/* this is another way to send the id in url */}
          {/* <Route path="customer/customerProfileDetails/:id" element={<CustomerProfilePage />}
            /> */}
          <Route
            path="customer/customerProfileDetails"
            element={<CustomerProfilePage />}
          />
          <Route path="allRecipes" element={<AllRecipes />} />
          <Route path="createNewRecipes" element={<CreateNewRecipe />} />
          <Route
            path="generate-purchase"
            element={<GeneratePurchaseDetails />}
          />
          <Route
            path="allRecipes/seeMoreDetailsOfRecipe"
            element={<SeeMoreDetailsOfRecipe />}
          />
        </Route>
      </Routes>
    </OrderDataContextProvider>
  );
}

export default App;
