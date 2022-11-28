import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((e) => setError('에러가 발생했음!'))
      .finally(() => setLoading(false));
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
      // return은 컴포넌트가 언마운트될 경우 호출된다.
    };
  }, [salesOnly]);

  // 커스텀 훅은 ui를 반환하는 것이 아니라
  // 원하는 데이터를 반환하게된다!
  return [loading, error, products];
}
