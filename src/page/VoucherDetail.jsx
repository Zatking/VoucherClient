import { set } from 'mongoose';
import React from 'react'
import { use } from '../../../server/routes/voucher.route';
import { useNavigate } from 'react-router-dom';
import { useParams,Link } from 'react-router-dom';
const VoucherDetail = () => {
  const [voucherDetail, setVoucherDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchVoucherDetail = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/vouchers/getVoucherById/${id}`
        ,)
      
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      setVoucherDetail(result);
    } catch (error) {
      setError("Không thể lấy dữ liệu từ máy chủ " + error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVoucherDetail();
  },[id])
  return(
    <>

    </>
  )
}
