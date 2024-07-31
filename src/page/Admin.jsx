import React, {useState,useEffect} from 'react'

const [voucher, setVoucher] = useState([]);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(true);

const fetchVoucher = async () => {
  try {
    const res = await fetch(
      "https://voucher-server-alpha.vercel.app/api/vouchers/getVoucher"
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

const Admin = () => {
  return (
    <div>
     
    </div>
  )
}

export default Admin
