import React, {useState} from "react";

const VoucherForm = () => { 
   
  const [voucher, setVoucher] = useState({
      VoucherID: '',
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
      VoucherCreatedBy: 'Voucher Supplier', // Assume a valid ObjectId string for demonstration
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setVoucher({ ...voucher, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:3001/api/vouchers/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(voucher),
        });
        if (response.ok) {
          alert("Voucher created successfully!");
          setVoucher({
            VoucherID: '',
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
            // CreatedBy: '', // Assume a valid ObjectId string for demonstration
          });
        } else {
          alert("Failed to create voucher!");
        }
      } catch (error) {
        console.error("Failed to create voucher!", error);
      }
    }

    return (
        <>
        <h1 className="text-2xl font-bold mb-4 text-center">Tạo Voucher</h1>
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md align-middle">
          <form  className="grid grid-cols-2 gap-10">
            <div className="flex">
              <label htmlFor="VoucherID" className=" text-sm font-medium text-gray-700">Mã Voucher:</label>
              <input
                type="text"
                id="VoucherID"
                name="VoucherID"
                value={voucher.VoucherID}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherName" className="block text-sm font-medium text-gray-700">Tên Voucher:</label>
              <input
                type="text"
                id="VoucherName"
                name="VoucherName"
                value={voucher.VoucherName}
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
                value={voucher.VoucherType}
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
                value={voucher.VoucherImage}
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
                value={voucher.VoucherDescription}
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
                value={voucher.VoucherStartDate}
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
                value={voucher.VoucherEndDate}
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
                value={voucher.VoucherDiscount}
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
                value={voucher.VoucherMinValue}
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
                value={voucher.VoucherMaxValue}
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
                value={voucher.VoucherQuantity}
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