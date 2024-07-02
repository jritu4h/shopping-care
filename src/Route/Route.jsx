import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/NewProducts/Products";
import CatagoryDashBord from "../Pages/Catagory/CatagoryDashBord";
import Login from "../Pages/Login/Login";
import Order from "../Pages/Order/Order";
import Private from "../Private/Private";
import DashBord  from "../Layout/DashBord"
import OrderCart from "../Pages/Dashbord/OrderCart/OrderCart";
import Error from "../Component/Error";
import AddReview from "../Pages/Dashbord/User/AddReview";
import UserHome from "../Pages/Dashbord/User/UserHome";
import Users from "../Pages/Dashbord/Admin/Users";
import AdminPrivate from "../Private/AdminPrivate";
import AddItem from "../Pages/Dashbord/Admin/AddItem";
import ConfromOrder from "../Pages/Dashbord/Admin/ConfromOrder";
import ManageItem from "../Pages/Dashbord/Admin/ManageItem";
import AdminHome from "../Pages/Dashbord/Admin/AdminHome";
import StoreOrder from "../Pages/Dashbord/Admin/StoreOrder";
import FullOrderdetils from "../Pages/Dashbord/Admin/FullOrderdetils";
import CoustomerCare from "../Pages/Dashbord/User/CoustomerCare";
import UpdateProducts from "../Pages/Dashbord/Admin/UpdateProducts";
import ManageReview from "../Pages/Dashbord/Admin/ManageReview";
import DetilsReview from "../Pages/Dashbord/Admin/DetilsReview";
import Fashion from "../Pages/Catagory/CatagorySection/Fashion";
import Electronics from "../Pages/Catagory/CatagorySection/Electronics";
import ITProducts from "../Pages/Catagory/CatagorySection/ITProducts";
import Cooking from "../Pages/Catagory/CatagorySection/Cooking";
import About from "../Pages/About/About";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/allproducts",
          element: <Products />,
        },
        {
          path: "/category",
          element: <CatagoryDashBord />,
          children:[
            {
              path: "/category",
              element: <Fashion />,
            },
            {
              path: "/category/electronics",
              element: <Electronics />,
            },
            {
              path: "/category/it products",
              element: <ITProducts />,
            },
            {
              path: "/category/Cooking",
              element: <Cooking />,
            },
          ]
        },
        {
          path: "/products/:id",
          element: <Order />,
          loader:({params})=> fetch(`https://tawsif-shop-server.vercel.app/products/${params.id}`)
        },
        {
          path: "/login",
          element: <Login />,
        },
       
      ],
    },
    {
      path:'dashboard',
      element:<Private><DashBord></DashBord></Private>,
      children:[
        {
          path:"myorder",
          element:<Private><OrderCart></OrderCart></Private>
        },
        {
          path:"addreview",
          element:<Private><AddReview></AddReview></Private>
        },
        {
          path:"userhome",
          element:<Private><UserHome></UserHome></Private>
        },
        {
          path:"castomer",
          element:<Private><CoustomerCare></CoustomerCare></Private>
        },
        // admin
        {
          path:"user",
          element:<AdminPrivate><Users></Users></AdminPrivate>
        },
        {
          path:"additem",
          element:<AdminPrivate><AddItem></AddItem></AdminPrivate>
        },
        {
          path:"manageorder",
          element:<AdminPrivate><ConfromOrder></ConfromOrder></AdminPrivate>
        },
        {
          path:"manageitem",
          element:<AdminPrivate><ManageItem></ManageItem></AdminPrivate>
        },
        {
          path:"store",
          element:<AdminPrivate><StoreOrder></StoreOrder></AdminPrivate>
        },
        {
          path:"adminhome",
          element:<AdminPrivate><AdminHome></AdminHome></AdminPrivate>
        },
        {
          path:"review",
          element:<AdminPrivate><ManageReview></ManageReview></AdminPrivate>
        },
        {
          path:"detilsReview/:id",
          element:<AdminPrivate><DetilsReview></DetilsReview></AdminPrivate>,
          loader:({params})=>fetch(`https://tawsif-shop-server.vercel.app/admincontrollreview/${params.id}`)
        },
        {
          path:'fulldetails/:id',
          element:<FullOrderdetils></FullOrderdetils>,
          loader:({params})=>fetch(`https://tawsif-shop-server.vercel.app/storeOrder/${params.id}`)
        },
        {
          path:'update/:id',
          element:<UpdateProducts></UpdateProducts>,
          loader:({params})=>fetch(`https://tawsif-shop-server.vercel.app/products/${params.id}`)
        }
      ]
    }
  ]);