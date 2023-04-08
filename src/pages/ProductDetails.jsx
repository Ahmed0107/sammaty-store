import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../rtk/slices/cartSlice";
import Categories from "../Components/Categories";

const Wrraper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  margin-top: 120px;

  @media (min-width: 300px) and (max-width: 600px) {
    width: 90%;
    margin-top: 120px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 90%;
    margin-top: 120px;
  }
`;

const ProductCardWrraper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  color: #000;
  justify-content: space-between;

  img {
    width: 49%;
    height: 100%;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    flex-direction: column;
    height: 600px;
    img {
      width: 100%;
      height: 300px;
      object-fit: fit;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    flex-direction: column;
    height: 600px;
    img {
      width: 100%;
      height: 300px;
      object-fit: fit;
    }
  }
`;

const ProductContent = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    letter-spacing: 0.5em;
    opacity: 0.7;
  }

  h1 {
    font-size: 40px;
    line-height: 50px;
  }

  h6 {
    font-size: 16px;
    word-wrap: break-word;
    font-weight: 500;
    opacity: 0.7;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    height: 700px;
    img {
      width: 100%;
      height: 200px;
      object-fit: fit;
    }
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 100%;
    flex-direction: column;
    height: 700px;
    img {
      width: 100%;
      height: 200px;
      object-fit: fit;
    }
  }
`;

const SeeProductLink = styled(Link)`
  width: 45%;
  padding: 8px 10px;
  font-size: 20px;
  color: #fff;
  background-color: #d87d4a;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-align: center;

  :hover {
    background-color: #e6804a;
    scale: 0.98;
  }
`;

const ActionsWrraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .increment-section {
    width: 35%;
    display: flex;
    justify-content: space-between;
    background-color: #f1f1f1;
    border-radius: 2px;

    button {
      width: 35%;
      height: 100%;
      font-size: 20px;
      /* margin: 0 10px; */
      cursor: pointer;
      border: none;

      :hover {
        background-color: #bbb8b8;
      }
    }
    span {
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
  }
`;

const ProductImgGallery = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .product-image-gallery-one-two {
    width: 43%;
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    img {
      width: 100%;
      height: 47%;
      border-radius: 10px;
    }
  }

  .product-image-gallery-three {
    width: 54%;
    height: 100%;
    /* border: 1px solid blue; */

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }

  @media (min-width: 300px) and (max-width: 600px) {
    width: 100%;
    height: 400px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 100%;
    height: 500px;
  }
`;

const RelatedProducts = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 300px) and (max-width: 600px) {
    height: 1300px;
    flex-direction: column;

  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    flex-direction: column;

  }
`;

const RelatedProductCard = styled.div`
  width: 32%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
    height: 70%;
  }

  .related-products-title {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    width: 100%;
    height: 400px;
    margin-top: 20px;
  }

  /* Tablet */
  @media (min-width: 600px) and (max-width: 1100px) {
    width: 60%;
    height: 400px;
    margin-top: 20px;
  }
`;

const SeeRelatedProductLink = styled(Link)`
  width: 180px;
  padding: 8px 10px;
  font-size: 20px;
  color: #fff;
  background-color: #d87d4a;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-align: center;

  :hover {
    background-color: #e6804a;
    scale: 0.98;
  }
`;

export default function ProductDetails() {
  const { prodTitle } = useParams();
  const [quantityCount, setquantityCount] = useState(1);
  const [productData, setProductData] = useState({});
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const foundedProduct = products.filter(
      (product) => product.title === prodTitle
    );

    setProductData(foundedProduct[0]);
  }, [prodTitle, products]);

  const quantityCountIncrement = () => {
    setquantityCount(quantityCount + 1);
  };
  const quantityCountDecrement = () => {
    if (quantityCount === 1) {
      return 1;
    } else {
      setquantityCount(quantityCount - 1);
    }
  };

  const { title, description, price, image } = productData;
  return (
    <>
      <Wrraper>
        <ProductCardWrraper>
          <img src={image} alt="" />
          <ProductContent>
            <p>New Product</p>
            <h1>{title}</h1>
            <h6>{description}</h6>
            <h2>${price}</h2>
            <ActionsWrraper>
              <div className="increment-section">
                <button
                  onClick={() => {
                    quantityCountIncrement();
                  }}
                >
                  +
                </button>
                <span>{quantityCount}</span>
                <button
                  onClick={() => {
                    quantityCountDecrement();
                  }}
                >
                  -
                </button>
              </div>
              <SeeProductLink onClick={() => dispatch(addToCart(productData))}>
                Add To Cart
              </SeeProductLink>
            </ActionsWrraper>
          </ProductContent>
        </ProductCardWrraper>

        <ProductImgGallery>
          <div className="product-image-gallery-one-two">
            <img src={image} alt="" />
            <img src={image} alt="" />
          </div>
          <div className="product-image-gallery-three">
            <img src={image} alt="" />
          </div>
        </ProductImgGallery>

        <h1>YOU MAY ALSO LIKE</h1>

        <RelatedProducts>
          <RelatedProductCard>
            <img src={image} alt="" />
            <div className="related-products-title">{title}</div>
            <SeeRelatedProductLink to={`/product-details/${title}`}>
              See Product
            </SeeRelatedProductLink>
          </RelatedProductCard>

          <RelatedProductCard>
            <img src={image} alt="" />
            <div className="related-products-title">{title}</div>
            <SeeRelatedProductLink to={`/product-details/${title}`}>
              See Product
            </SeeRelatedProductLink>
          </RelatedProductCard>

          <RelatedProductCard>
            <img src={image} alt="" />
            <div className="related-products-title">{title}</div>
            <SeeRelatedProductLink to={`/product-details/${title}`}>
              See Product
            </SeeRelatedProductLink>
          </RelatedProductCard>
        </RelatedProducts>
      </Wrraper>
      <Categories />
    </>
  );
}
