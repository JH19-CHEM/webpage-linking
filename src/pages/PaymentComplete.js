import React from 'react';
import '../styles/PaymentComplete.css';

const PaymentComplete = () => {
  return (
    <div className="payment-complete">
      <h1>결제가 완료되었습니다!</h1>
      <p>주문이 성공적으로 처리되었습니다. 감사합니다.</p>
    </div>
  );
};

export default PaymentComplete;
