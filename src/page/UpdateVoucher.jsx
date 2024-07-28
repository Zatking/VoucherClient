import React from 'react'
import { useState,useEffect } from 'react';
import { useParams,useNavigate,Link } from 'react-router-dom';


const UpdateVoucher = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Thay thế useNavigation bằng useNavigate

  const [formData, setFormData] = useState({
    VoucherImage: "",
    VoucherDescription: "",
    VoucherStartDate: "",
    VoucherEndDate: "",
    VoucherDiscount: "",
    VoucherMinValue: "",
    VoucherMaxValue: "",
  });


  

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const fetchVoucherByID = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/vouchers/getVoucherById/${id}`,
        {
          method: "POST",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      setFormData({
        VoucherImage: result.VoucherImage,
        VoucherDescription: result.VoucherDescription,
        VoucherStartDate: result.VoucherStartDate,
        VoucherEndDate: result.VoucherEndDate,
        VoucherDiscount: result.VoucherDiscount,
        VoucherMinValue: result.VoucherMinValue,
        VoucherMaxValue: result.VoucherMaxValue,
      })
    } catch (error) {
      setError("Không thể lấy dữ liệu từ máy chủ " + error);
    } finally {
      setIsLoading(false);
    }
  }
 
 useEffect(() => {
  console.log(id);
  fetchVoucherByID()
 },[id]
 )

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
...prevFormData,
    [name]: value,
  }));
 }

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:3001/api/vouchers/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Voucher updated successfully!");
      navigate("/VoucherList");
    } else {
      alert("Failed to update voucher!");
    }
  } catch (error) {
    console.error("Failed to update voucher!", error);
    alert("Failed to update voucher!");
  }
 }

  if(isLoading)
    return (
      <div className="text-center text-4xl translate-y-1/2 h-full font-extrabold">Loading...</div>
    );

  if(error){
    return <div className="text-center text-4xl translate-y-1/2 h-full font-extrabold">{error}</div>
  }
  

return (
  <div>
    <h1 className="text-2xl font-bold mb-4 text-center">Update Voucher</h1>
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md align-middle">
          <form  className="grid grid-cols-2 gap-10">
            <div className="flex">
              <label htmlFor="VoucherImage" className="block text-sm font-medium text-gray-700">Ảnh Voucher:</label>
              <input
                type="text"
                id="VoucherImage"
                name="VoucherImage"
                value={formData.VoucherImage || ''}
                onChange={handleInputChange }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex">
              <label htmlFor="VoucherDescription" className="block text-sm font-medium text-gray-700">Mô Tả Voucher:</label>
              <input
                type="text"
                id="VoucherDescription"
                name="VoucherDescription"
                value={formData.VoucherDescription || ''}
                onChange={handleInputChange}
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
                value={formData.VoucherStartDate || ''}
                onChange={handleInputChange}
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
                value={formData.VoucherEndDate || ''}
                onChange={handleInputChange}
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
                value={formData.VoucherDiscount || ''}
                onChange={handleInputChange }
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
                value={formData.VoucherMinValue || ''}
                onChange={handleInputChange}
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
                value={formData.VoucherMaxValue || ''}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
           <Link to="/VoucherList" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <button>
                    Cancel
                  </button>
           </Link>
            <button type="submit"
             className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             onClick={handleSubmit}>Update Voucher</button>
          </form>
        </div>
      
  </div>
)
}

export default UpdateVoucher;
