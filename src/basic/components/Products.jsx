import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('๐ฅ๋จ๋ํ ๋ฐ์ดํฐ๋ฅผ ๋คํธ์ํฌ์์ ๋ฐ์์ด');
        setProducts(data);
      });
    return () => {
      console.log('๐งน ๊นจ๋ํ๊ฒ ์ฒญ์ํ๋ ์ผ๋ค์ ํฉ๋๋ค.');
      // return์ ์ปดํฌ๋ํธ๊ฐ ์ธ๋ง์ดํธ๋  ๊ฒฝ์ฐ ํธ์ถ๋๋ค.
    };
  }, [checked]);

  return (
    <>
      <input id='checkbox' type='checkbox' value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Show Only ๐ฅSale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
