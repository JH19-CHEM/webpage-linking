import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Payment.css';

const Payment = ({ addedCard }) => {
  const navigate = useNavigate();

  return (
    <div className="payment">
      <h1>결제 페이지</h1>
      {addedCard ? (
        <div>
          <p>카드 번호: {addedCard.cardNumber}</p>
          <p>유효 기간: {addedCard.expiryDate}</p>
          <p>CVC: {addedCard.cvc}</p>
          <button onClick={() => navigate('/complete')} className="complete-button">결제 완료</button>
        </div>
      ) : (
        <p>카드 정보를 입력해 주세요.</p>
      )}
    </div>
  );
};

export default Payment;
