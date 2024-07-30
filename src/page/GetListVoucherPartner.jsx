import React from 'react'
import { useEffect, useState } from "react";  
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const  GetListVoucherPartner = () => {
  const [voucher, setVoucher] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("service").toUpperCase(); // Assume the query is a valid string for demonstration

  const fetchVoucher = async () => {
    try {
      const res = await fetch(
        "http://localhost:3001/api/vouchers/getVoucher"
        ,)
      
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      setVoucher(result.vouchers || []);
    } catch (error) {
      setError("Không thể lấy dữ liệu từ máy chủ " + error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchVoucher();
  }, []);


  const handleDeleteVoucher = async (_id) => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/vouchers/delete/${_id}`,
        {
          method: "POST", // Sử dụng phương thức POST theo routes của bạn
        }
      );
      if (res.status === 200) {
        alert("Xóa thành công");
        window.location.reload();
      } else {
        alert("Xóa thất bại");
      }
    } catch (error) {
      console.error("Error deleting voucher:", error);
      alert("Đã xảy ra lỗi khi xóa voucher");
    }
  };

  
  if (isLoading)
    return (
      <div className="text-center text-4xl translate-y-1/2 h-full font-extrabold">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="text-center text-4xl translate-y-1/2 h-full font-extrabold">
        Error: {error}
      </div>
    );

  
   return (
     <div className="w-auto h-full bg-white">
      <div className="flex w-auto">
        <h1 className="text-black w-1/2 p-4 text-4xl">Danh sách Voucher</h1>
        <div className="flex w-1/2 mr-2 justify-end">
          <button className="bg-blue-500 px-4 py-2 mt-4 w-fit h-fit hover:bg-blue-700 text-white font-bold rounded">
            <a className="no-underline text-white" href="/CreateVoucher">
              Thêm Voucher
            </a>
          </button>
        </div>
      </div>
      <div className="p-2">
        <table className="w-full">
          <thead>
            <tr className="bg-green-400">
              <th className="border px-4 py-2">Mã Voucher</th>
              <th className="border px-4 py-2">Tên Voucher</th>
              <th className="border px-4 py-2">Số lượng</th>
              <th className="border px-4 py-2">Ngày hết hạn</th>
              <th className="border px-4 py-2">Trạng thái</th>
              <th className="border px-4 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            
            {voucher.map((voucher) =>  {
              if(voucher.VoucherCreatedBy === query)
                return(
              <tr key={voucher._id} className="text-black">
                <td className="border px-4 py-2">{voucher.VoucherID}</td>
                <td className="border px-4 py-2">{voucher.VoucherName}</td>
                <td className="border px-4 py-2">{voucher.VoucherQuantity}</td>
                <td className="border px-4 py-2">{voucher.VoucherEndDate}</td>
                <td className="border px-4 py-2">{voucher.VoucherCreatedBy}</td>
                <td className="border px-4 py-2 flex justify-center space-x-4">
                  <button
                    className="bg-red-500 px-4 py-2 w-fit h-fit hover:bg-red-700 text-white font-bold rounded"
                    onClick={() => handleDeleteVoucher(voucher._id)}
                  >
                    Xóa
                  </button>
                  <button
                    className="bg-blue-500 px-4 py-2 w-fit h-fit hover:bg-blue-700 text-white font-bold rounded"
                    onClick={() => voucher._id}
                  > <Link to={`/UpdateVoucher/${voucher._id}`}>
                    Cập nhật
                  </Link>
                  </button>
                </td>
              </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </div>
   )
 }
 
 export default GetListVoucherPartner;