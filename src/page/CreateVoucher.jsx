import React, { useState } from "react";

const VoucherForm = () => {
  const [voucher, setVoucher] = useState({
    VoucherID: "",
    VoucherName: "",
    VoucherType: "",
    VoucherImage: "",
    VoucherDescription: "",
    VoucherStartDate: "",
    VoucherEndDate: "",
    VoucherDiscount: 0,
    VoucherMinValue: 0,
    VoucherMaxValue: 0,
    VoucherQuantity: 0,
    VoucherStatus: "Available",
    AmountUsed: 0,
    VoucherCreatedBy: "voucher", // Assume a valid ObjectId string for demonstration
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoucher({ ...voucher, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!voucher.VoucherID) alert(errors.VoucherID= "Mã Voucher là bắt buộc");
    if (!voucher.VoucherName) alert(errors.VoucherName = "Tên Voucher là bắt buộc");
    if (!voucher.VoucherType) alert(errors.VoucherType = "Loại Voucher là bắt buộc");
    if (!voucher.VoucherDescription) alert(errors.VoucherDescription = "Mô Tả Voucher là bắt buộc");
    if (!voucher.VoucherStartDate) alert(errors.VoucherStartDate = "Ngày Bắt Đầu là bắt buộc");
    if (!voucher.VoucherEndDate) alert(errors.VoucherEndDate = "Ngày Kết Thúc là bắt buộc");
    if (!voucher.VoucherDiscount) alert(errors.VoucherDiscount = "Giảm Giá là bắt buộc");
    if (!voucher.VoucherMinValue) alert(errors.VoucherMinValue = "Giá Trị Tối Thiểu là bắt buộc");
    if (!voucher.VoucherMaxValue) alert(errors.VoucherMaxValue = "Giá Trị Tối Đa là bắt buộc");
    if (!voucher.VoucherQuantity) alert(errors.VoucherQuantity = "Số Lượng Voucher là bắt buộc");
    if (!voucher.VoucherImage) alert(errors.VoucherImage = "Ảnh Voucher là bắt buộc");
    if (voucher.VoucherDiscount < 0 || voucher.VoucherDiscount>100) alert(errors.VoucherDiscount = " Giảm Giá phải từ 0 đến 100");
    if (voucher.VoucherMinValue < 0 ||voucher.VoucherMinValue > voucher.VoucherMaxValue ) alert(errors.VoucherMinValue = "Giá Trị Tối Thiểu phải lớn hơn hoặc bằng 0");
    if (voucher.VoucherMaxValue < voucher.VoucherMinValue || voucher.VoucherMaxValue > 50) alert(errors.VoucherMaxValue = "Giá Trị Tối Đa phải lớn hơn Giá Trị Tối Thiểu và nhỏ hơn 50"); 
    if (voucher.VoucherQuantity <= 0 || voucher.VoucherQuantity >999) alert(errors.VoucherQuantity = "Số Lượng Voucher phải lớn hơn 0 và nhỏ hơn 1000");
    if(voucher.VoucherStartDate < Date.now -1) alert(errors.VoucherStartDate = "Ngày Bắt Đầu phải lớn hơn hoặc bằng ngày hiện tại");
    if(voucher.VoucherEndDate < voucher.VoucherStartDate) alert(errors.VoucherEndDate = "Ngày Kết Thúc phải lớn hơn hoặc bằng Ngày Bắt Đầu");
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await fetch(
        "https://voucher-server-alpha.vercel.app/api/vouchers/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(voucher),
        }
      );
      if (response.ok) {
        alert("Voucher created successfully!");
        setVoucher({
          VoucherID: "",
          VoucherName: "",
          VoucherType: "",
          VoucherImage: "",
          VoucherDescription: "",
          VoucherStartDate: "",
          VoucherEndDate: "",
          VoucherDiscount: 0,
          VoucherMinValue: 0,
          VoucherMaxValue: 0,
          VoucherQuantity: 0,
          VoucherStatus: "",
          AmountUsed: 0,
          // CreatedBy: '', // Assume a valid ObjectId string for demonstration
        });
      } else {
        alert("Failed to create voucher!");
      }
    } catch (error) {
      console.error("Failed to create voucher!", error);
    }
  };

  return (
    <form className="bg-gradient-to-b from-green-400 p-6">
      <h1 className="text-4xl font-bold mb-4 pt-6 text-center text-white border-t-8 border-white rounded-3xl">
        Tạo Voucher
      </h1>
      <div className="grid grid-cols-12 rounded-xl bg-white place-items-end items-center gap-4 p-12 m-12 drop-shadow-xl">
        <p className="col-span-2 font-bold text-left text-green-400 text-lg place-self-start">
          Thông tin cơ bản
        </p>
        <div className="col-span-10"></div>
        <label
          htmlFor="VoucherID"
          className=" text-sm font-medium text-gray-700 col-span-2"
        >
          Mã Voucher:
        </label>
        <input
          type="text"
          id="VoucherID"
          name="VoucherID"
          value={voucher.VoucherID}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 col-span-4 border border-gray-300 rounded-md shadow-sm
            focus:outline-none focus:ring-green-400 focus:border-green-400 sm:text-sm"
          required
        />
        <label
          htmlFor="VoucherName"
          className="block text-sm font-medium text-gray-700 col-span-2"
        >
          Tên Voucher:
        </label>
        <input
          type="text"
          id="VoucherName"
          name="VoucherName"
          value={voucher.VoucherName}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 col-span-4 border border-gray-300 rounded-md shadow-sm
            focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          required
        />
        <label
          htmlFor="VoucherType"
          className="block text-sm font-medium text-gray-700 col-span-2"
        >
          Loại Voucher:
        </label>
        <input
          type="text"
          id="VoucherType"
          name="VoucherType"
          value={voucher.VoucherType}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 col-span-4 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          required
        />
        <label
          htmlFor="VoucherImage"
          className="block text-sm font-medium text-gray-700 col-span-2"
        >
          Ảnh Voucher:
        </label>
        <input
          type="text"
          id="VoucherImage"
          name="VoucherImage"
          value={voucher.VoucherImage}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 col-span-4 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        />
        <label
          htmlFor="VoucherDescription"
          className="block text-sm font-medium text-gray-700 col-span-2"
        >
          Mô Tả Voucher:
        </label>
        <input
          type="text"
          id="VoucherDescription"
          name="VoucherDescription"
          value={voucher.VoucherDescription}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border col-span-10 border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          required
        />
      </div>
      <div className="grid grid-cols-12 rounded-xl bg-white place-items-end items-center gap-4 p-12 m-12 shadow-xl">
        <p className="col-span-2 font-bold text-left text-green-400 text-lg place-self-start">
          Thiết lập giảm giá
        </p>
        <div className="col-span-10"></div>
        <label
          htmlFor="VoucherStartDate"
          className="block text-sm font-medium text-gray-700 col-span-2"
        >
          Ngày Bắt Đầu:
        </label>
        <input
          type="date"
          id="VoucherStartDate"
          name="VoucherStartDate"
          value={voucher.VoucherStartDate}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 col-span-4 border border-gray-300 rounded-md shadow-sm
              focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          required
        />
        <label
          htmlFor="VoucherEndDate"
          className="block text-sm font-medium text-gray-700 col-span-2"
        >
          Ngày Kết Thúc:
        </label>
        <input
          type="date"
          id="VoucherEndDate"
          name="VoucherEndDate"
          value={voucher.VoucherEndDate}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 col-span-4 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          required
        />
        <label
          htmlFor="VoucherDiscount"
          className="block text-sm font-medium text-gray-700 col-span-2"
        >
          Giảm Giá (%):
        </label>
        <input
          type="number"
          id="VoucherDiscount"
          name="VoucherDiscount"
          value={voucher.VoucherDiscount}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 col-span-4 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          required
        />
        <label
          htmlFor="VoucherMinValue"
          className="block text-sm font-medium text-gray-700 col-span-2"
        >
          Giá Trị Tối Thiểu:
        </label>
        <input
          type="number"
          id="VoucherMinValue"
          name="VoucherMinValue"
          value={voucher.VoucherMinValue}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 col-span-4 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          required
        />
        <label
          htmlFor="VoucherMaxValue"
          className="block text-sm font-medium text-gray-700 col-span-2"
        >
          Giá Trị Tối Đa:
        </label>
        <input
          type="number"
          id="VoucherMaxValue"
          name="VoucherMaxValue"
          value={voucher.VoucherMaxValue}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 col-span-4 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          required
        />
        <label
          htmlFor="VoucherQuantity"
          className="block text-sm font-medium text-gray-700 col-span-2"
        >
          Số Lượng Voucher:
        </label>
        <input
          type="number"
          id="VoucherQuantity"
          name="VoucherQuantity"
          value={voucher.VoucherQuantity}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 col-span-4 border border-gray-300 rounded-md shadow-sm
          focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-400 text-white font-bold py-4 mt-8 col-span-8 col-start-3 rounded-lg
          hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
          onClick={handleSubmit}
        >
          Tạo Voucher
        </button>
      </div>
    </form>
  );
};

export default VoucherForm;