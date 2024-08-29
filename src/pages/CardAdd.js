import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CardAdd.css';

const CardAdd = ({ setAddedCard }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardData = { cardNumber, expiryDate, cvc };
    setAddedCard(cardData);
    navigate('/payment');
  };

  return (
    <div className="card-add">
      <h1>카드 정보 입력</h1>
      <form onSubmit={handleSubmit}>
        <label>
          카드 번호:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
        <label>
          유효 기간:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </label>
        <label>
          CVC:
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="submit-button">정보 저장</button>
      </form>
    </div>
  );
};

export default CardAdd;
