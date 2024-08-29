import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/ProductDetail.css';

const products = [
  { id: 1, name: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: '35,000', image: '../image1.png' },
  { id: 2, name: '브랜드A', description: '힙한 컬러가 매력적인 신발', price: '25,000', image: '../image2.png' },
  { id: 3, name: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: '35,000', image: '../image3.png' },
  { id: 4, name: '브랜드B', description: '힙한 컬러가 매력적인 신발', price: '35,000', image: '../image4.png' },
  { id: 5, name: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: '35,000', image: '../image5.png' },
  { id: 6, name: '브랜드C', description: '힙한 컬러가 매력적인 신발', price: '35,000', image: '../image6.png' }
];

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const selectedProduct = products.find(p => p.id === parseInt(id));
    if (selectedProduct) {
      setProduct(selectedProduct);
      const related = products.filter(p => p.id !== parseInt(id) && p.name === selectedProduct.name);
      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) return <div>로딩 중...</div>;

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price} 원</p>
        <div className="quantity-selector">
          <button onClick={() => setQuantity(q => Math.max(q - 1, 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>
        <button onClick={() => addToCart(product, quantity)}>장바구니에 추가</button>
        <button onClick={() => navigate('/cart')}>장바구니로 이동</button>
      </div>
      <div className="related-products">
        <h2>관련 제품</h2>
        <div className="related-products-list">
          {relatedProducts.map(p => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.name} />
              <h2>{p.name}</h2>
              <p>{p.price} 원</p>
              <button onClick={() => addToCart(p, 1)}>장바구니에 추가</button>
              <button onClick={() => navigate(`/product/${p.id}`)}>상세 보기</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
