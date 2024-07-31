import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VoucherCard from '../components/VoucherCard';
// import PartnerCard from './PartnerCard';

const Dashboard = () => {
  const [vouchers, setVouchers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchVouchers = async () => {
    try {
      const res = await fetch('http://lhttps://voucher-server-alpha.vercel.app/api/getVoucher');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await res.json();
      setVouchers(result.vouchers || []);
    } catch (error) {
      console.error('Error fetching vouchers:', error);
    }
  }

  useEffect(() => {fetchVouchers}, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredVouchers = vouchers.filter(voucher =>
    voucher.name.toLowerCase().includes(search)
  );

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 lg:w-3/4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="flex text-black justify-between items-center mb-4">
          <input 
            type="text" 
            placeholder="Search vouchers..." 
            value={search} 
            onChange={handleSearch} 
            className="p-2 border border-gray-700 rounded-md w-1/3"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVouchers.slice(0, 6).map(voucher => (
            <VoucherCard key={voucher.id} voucher={voucher} partners={partners} />
          ))}
        </div>
        <Link to="/VoucherList" className="mt-4 text-blue-400 hover:underline">View All Vouchers</Link>
      </div>
    </div>
  );
};

export default Dashboard;
