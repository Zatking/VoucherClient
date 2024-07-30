import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VoucherDetail = () => {
  const { id } = useParams();
  const [voucher, setVoucher] = useState(
    {
      VoucherID: "",
      VoucherName: "",
      VoucherQuantity: "",
      VoucherEndDate: "",
      VoucherStatus: "",
    }
  );
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVoucherByID = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/vouchers/getVoucherById/${id}`, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Fetched Voucher Data: ", result);
      setVoucher(result);
    } catch (error) {
      setError("Không thể lấy dữ liệu từ máy chủ: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVoucherByID();
  }, [id]);

  useEffect(() => {
    console.log("Voucher Data: ", voucher);
  }, [voucher]);

  if (isLoading) {
    return (
      <div className="text-center text-4xl translate-y-1/2 h-full font-extrabold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-4xl translate-y-1/2 h-full font-extrabold">
        Error: {error}
      </div>
    );
  }

  if (!voucher || Object.keys(voucher).length === 0) {
    return (
      <div className="text-center text-4xl translate-y-1/2 h-full font-extrabold">
        No voucher data available.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-1/2">
        <img src={voucher} alt={voucher.VoucherDescription} className="w-full h-96 object-cover" />
      </div>
      <div className="w-1/2 px-8">
    
             
            
                  <div className="border px-4 py-2">{voucher.VoucherID}</div>
                  <div className="border px-4 py-2">{voucher.VoucherName}</div>
                  <div className="border px-4 py-2">{voucher.VoucherQuantity}</div>
                  <div className="border px-4 py-2">{voucher.VoucherEndDate}</div>
                  <div className="border px-4 py-2">{voucher.VoucherStatus}</div>
                

              
      
      </div>
    </div>
  );
};

export default VoucherDetail;
