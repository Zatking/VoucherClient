import React from 'react'

const  CreateVoucherPartner = () => {
  const [VoucherPartner, setVoucherPartner] = useState({
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
    // CreatedBy: '', // Assume a valid ObjectId string for demonstration
  });
  
  return (
    <div>
      
    </div>
  )
}

export default CreateVoucherPartner