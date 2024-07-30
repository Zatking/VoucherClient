import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx'
import VoucherList from '../page/GetListVoucher.jsx'
import AdminPage from '../page/Admin.jsx'
import CreateVoucher from '../page/CreateVoucher.jsx'
import ErrorPage from "./ErrorPage.jsx";
import UpdateVoucher from "../page/UpdateVoucher.jsx";
import CreateVoucherPartner from "../page/CreateVoucherPartner.jsx";
import GetListVoucherPartner from "../page/GetListVoucherPartner.jsx";



const router = createBrowserRouter([
 
  {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element:  <AdminPage />,
        },
        {
          path: "CreateVoucher",
          element: <CreateVoucher />    ,
        },
        {
          path: "VoucherList",
          element: <VoucherList />,
        },
        {
          path:`UpdateVoucher/:id`,
          element: <UpdateVoucher/>,
        },
        {
          path:"CreateVoucherPartner",
          element: <CreateVoucherPartner/>,
        },
        {
          path:"VoucherPartnerList",
          element: <GetListVoucherPartner/>,
        }
      
      ],
    },
  ]);
  
  export default router;
  