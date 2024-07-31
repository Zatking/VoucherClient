import React, {useState,useEffect} from 'react'

const [voucher, setVoucher] = useState([]);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(true);



const Admin = () => {
  return (
    <div>
        <div>
              {
                voucher.map((voucher) => (
                  <div>

                  </div>
                )
              )
              }
        
        </div>
    </div>
  )
}

export default Admin
