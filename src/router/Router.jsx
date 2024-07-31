import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx'
import VoucherList from '../page/GetListVoucher.jsx'
import CreateVoucher from '../page/CreateVoucher.jsx'
import ErrorPage from "./ErrorPage.jsx";
import UpdateVoucher from "../page/UpdateVoucher.jsx";
import CreateVoucherPartner from "../page/CreateVoucherPartner.jsx";
import GetListVoucherPartner from "../page/GetListVoucherPartner.jsx";
import VoucherDetail from "../page/VoucherDetail.jsx";
import VoucherDetailPartner from "../page/VoucherDetailPartner.jsx";
import Dashboard from "../page/Dashboard.jsx";


const router = createBrowserRouter([
 
  {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element:  <VoucherList />,
        },
        {
          path: "CreateVoucher",
          element: <CreateVoucher />    ,
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
        },
        {
          path:"VoucherDetail/:id",
          element: <VoucherDetail/>,
        },
        {
          path:"VoucherDetailPartner/:id",
          element: <VoucherDetailPartner/>,
        },
        {
          path: "Dashboard",
          element: <Dashboard />,
        }
      
      ],
    },
  ]);
  
  export default router;
  