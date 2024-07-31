import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-4 flex">
     <Link to="/">
        <h1 className="text-white text-2xl ml-2 font-bold">Voucher</h1>
     </Link>
      <div className="grid grid-cols-12 w-full">
       
        <Link
          to="/VoucherList"
          className="text-white py-2 px-4 rounded-md hover:bg-gray-700"
        >
          Vouchers
        </Link>
        
       
      </div>
    </div>
  );
};

export default Navbar;
