import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VoucherDetail = () => {
  const { id } = useParams();
  const [voucher, setVoucher] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

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
      console.log("Fetched Voucher Data: ", result.voucher.VoucherImage);
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
    <div className="modal-box">
              <h3 className="font-bold text-4xl text-pink-600 my-3">
                {voucher.voucher.VoucherName}
              </h3>

              <div className="grid grid-cols-12 place-items-center ">
                <div className="col-span-4">
                  <img
                    src={voucher.voucher.VoucherImage}
                    alt=""
                    className="img-fluid rounded"
                  />
                </div>
                <div className="grid col-span-8 text-left place-items-start w-full px-10">
                  <p>
                    <span className="font-bold text-pink-600">Mã:</span>{" "}
                    {voucher.voucher.VoucherID}
                  </p>
                  <p>
                    <span className="font-bold text-pink-600">
                      Hạn sử dụng:
                    </span>{" "}
                    {formatDate(voucher.voucher.VoucherEndDate)}
                  </p>
                  <p>
                    <span className="font-bold text-pink-600">Mức giảm:</span>{" "}
                    {voucher.voucher.VoucherDiscount}%
                  </p>
                  <p>
                    <span className="font-bold text-pink-600">
                      Giảm tối đa:
                    </span>{" "}
                    {voucher.voucher.VoucherMaxValue}đ
                  </p>
                  <p>
                    <span className="font-bold text-pink-600">
                      Giá trị đơn hàng tối thiểu:
                    </span>{" "}
                    {voucher.voucher.VoucherMinValue}đ
                  </p>
                  <p>
                    <span className="font-bold text-pink-600">Mô tả:</span>{" "}
                    {voucher.voucher.VoucherDescription}
                  </p>
                </div>
              </div>
            </div>
  );
};

export default VoucherDetail;
