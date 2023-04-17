import { useState, useEffect } from 'react';

export const useProducts = ({ salesOnly }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => setError('에러가 발생했음!'))
      .finally(() => setLoading(false));
    return () => {
      // 컴포넌트가 언마운트될 때 이 콜백함수가 실행됨
      console.log('언마운트');
    };
  }, [salesOnly]);

  return [loading, error, products];
  // custom hook은 ui가 아닌 데이터를 반환한다.
};
