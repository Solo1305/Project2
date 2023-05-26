import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:5000/api/product/getproducts"
      );
      if (res.status === 200) {
        // console.log(res.data.data);
        setProducts(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {products.length > 0 ? (
            products.map((product, index) => {
              return (
                <div key={index} className="col-md-4 mt-5">
                  <div className="custom-card position-relative p-0">
                    <img src={product.image}   className="img-fluid card-image" />

                    <div className="image-title">
                      <h3>{product.title}</h3>
                    </div>

                    <div className="overlay">
                    <div className="text-end">
                        <Link to="/product-details" state={{product}} className="detail">
                          Details
                        </Link>
                      </div>
                    </div>

                    {/* <div className="card-body px-2 py-4">
                      <h3>{product.title} </h3>
                      <p> {product.desc}</p>
                      <p className="price">
                        <b> {product.price} $</b>
                      </p>

                      <div className=" text-end">
                        <Link to="/product-details" state={{product}} className="detail">
                          Details
                        </Link>
                      </div>
                    </div> */}


                  </div>
                </div>
              );
            })
          ) : (
            <h1>No Products</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
