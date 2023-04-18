import React, { useEffect, useState } from 'react';
import axios from 'axios';
const url = 'https://serverless-fncs-gryo.netlify.app/api/2-basic-api';

const Basic = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      setProducts(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="section section-center">
      <div className="title">
        <h2>Basic</h2>
        <div className="title-underline"></div>
      </div>
      <div className="products">
        {products.map((prod) => {
          console.log(prod);
          const {
            id,
            image: { url },
            price,
            name,
          } = prod;
          return (
            <article className="product" key={id}>
              <img src={url} alt={name} />
              <div className="info">
                <h5>{name}</h5>
                <h5 className="price">${price}</h5>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Basic;
