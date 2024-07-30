import React, {useState} from "react";
import { useLocation } from "react-router-dom";

const VoucherForm = () => { 
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("service").toUpperCase(); // Assume the query is a valid string for demonstration
  
  const [voucherPartner, setVoucherPartner] = useState({
      VoucherID: `${query.charAt(0)+query.charAt(1)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)}`,
      VoucherName: '',
      VoucherType: '',
      VoucherImage: '',
      VoucherDescription: '',
      VoucherStartDate: '',
      VoucherEndDate: '',
      VoucherDiscount: 0,
      VoucherMinValue: 0,
      VoucherMaxValue: 0,
      VoucherQuantity: 0,
      VoucherStatus: 'Available',
      AmountUsed: 0,
      VoucherCreatedBy: `${query}`, // Assume a valid ObjectId string for demonstration
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setVoucherPartner({ ...voucherPartner, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:3001/api/vouchers/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(voucherPartner),
        });
        if (response.ok) {
          alert("Voucher created successfully!");
          setVoucher({
            VoucherID: `${query}`,
            VoucherName: '',
            VoucherType: '',
            VoucherImage: '',
            VoucherDescription: '',
            VoucherStartDate: '',
            VoucherEndDate: '',
            VoucherDiscount: 0,
            VoucherMinValue: 0,
            VoucherMaxValue: 0,
            VoucherQuantity: 0,
            VoucherStatus: '',
            AmountUsed: 0,
            VoucherCreatedBy: 'Voucher Supplier', // Assume a valid ObjectId string for demonstration
q          });
        } else {
          alert("Failed to create voucher!");
        }
      } catch (error) {
        console.error("Failed to create voucher!", error);
      }
    }
    const service = "Partner";

    return (
        <>
        <h1 className="text-2xl font-bold mb-4 text-center">Tạo Voucher  {query}</h1>
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md align-middle">
          <form  className="grid grid-cols-2 gap-10">
            <div className="flex">
              <label htmlFor="VoucherID" className=" text-sm font-medium text-gray-700">Mã Voucher:</label>
              <input
                type="text"
                id="VoucherID"
                name="VoucherID"
                value={voucherPartner.VoucherID}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                disabled={true}
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherName" className="block text-sm font-medium text-gray-700">Tên Voucher:</label>
              <input
                type="text"
                id="VoucherName"
                name="VoucherName"
                value={voucherPartner.VoucherName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherType" className="block text-sm font-medium text-gray-700">Loại Voucher:</label>
              <input
                type="text"
                id="VoucherType"
                name="VoucherType"
                value={voucherPartner.VoucherType}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherImage" className="block text-sm font-medium text-gray-700">Ảnh Voucher:</label>
              <input
                type="text"
                id="VoucherImage"
                name="VoucherImage"
                value={voucherPartner.VoucherImage}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherDescription" className="block text-sm font-medium text-gray-700">Mô Tả Voucher:</label>
              <input
                type="text"
                id="VoucherDescription"
                name="VoucherDescription"
                value={voucherPartner.VoucherDescription}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherStartDate" className="block text-sm font-medium text-gray-700">Ngày Bắt Đầu:</label>
              <input
                type="date"
                id="VoucherStartDate"
                name="VoucherStartDate"
                value={voucherPartner.VoucherStartDate}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherEndDate" className="block text-sm font-medium text-gray-700">Ngày Kết Thúc:</label>
              <input
                type="date"
                id="VoucherEndDate"
                name="VoucherEndDate"
                value={voucherPartner.VoucherEndDate}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherDiscount" className="block text-sm font-medium text-gray-700">Giảm Giá (%):</label>
              <input
                type="number"
                id="VoucherDiscount"
                name="VoucherDiscount"
                value={voucherPartner.VoucherDiscount}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherMinValue" className="block text-sm font-medium text-gray-700">Giá Trị Tối Thiểu:</label>
              <input
                type="number"
                id="VoucherMinValue"
                name="VoucherMinValue"
                value={voucherPartner.VoucherMinValue}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherMaxValue" className="block text-sm font-medium text-gray-700">Giá Trị Tối Đa:</label>
              <input
                type="number"
                id="VoucherMaxValue"
                name="VoucherMaxValue"
                value={voucherPartner.VoucherMaxValue}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherQuantity" className="block text-sm font-medium text-gray-700">Số Lượng Voucher:</label>
              <input
                type="number"
                id="VoucherQuantity"
                name="VoucherQuantity"
                value={voucherPartner.VoucherQuantity}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>      
            <button type="submit"
             className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             onClick={handleSubmit}>Tạo Voucher</button>
          </form>
        </div>
      
      </>
);
}

export default VoucherForm;