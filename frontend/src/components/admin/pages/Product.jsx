import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const Product = () => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({
    image: "",
    title: "",
    desc: "",
    price: ""
  });

  const [edit, setEdit] = useState(null);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:5000/api/product/getproducts"
      );
      if (res.status === 200) {
        console.log(res.data.data);
        setProducts(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await Axios.delete(
        `http://localhost:5000/api/product/deleteproduct/${id}`
      );
      if (res.status === 200) {
        console.log(res.data.data);
        getProducts();
      }
    } catch (error) {
      console.log(error);
    }
  }



  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });

  }
  const addProduct = async (e) => {
    e.preventDefault();

    if(edit!==null){        
      try {
        const res = await Axios.patch(
          `http://localhost:5000/api/product/updateproduct/${edit}`,
          product
        );
        if (res.status === 200) {
          console.log(res.data.data);
          setProduct({
            image: "",
            title: "",
            desc: "",
            price: ""
          });
          getProducts();
          setShow(false);
          setEdit(null);
        }
      } catch (error) {
        console.log(error);
      }

    }else{
      try {
        const res = await Axios.post(
          "http://localhost:5000/api/product/addproduct",
          product
        );
        if (res.status === 200) {
          console.log(res.data.data);
          setProduct({
            image: "",
            title: "",
            desc: "",
            price: ""
          });
          getProducts();
          setShow(false);
        }
      } catch (error) {
        console.log(error);
      }

    }
   
  }


  const editProduct = (product) => {
    setEdit(product._id);
    setProduct({
      image: product.image,
      title: product.title,
      desc: product.desc,
      price: product.price
    });
    setShow(true);
  }

  
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className=" product container-fluid py-3">
        <div className="row">
          <div className="col-12 text-center">
            <button
              className="btn btn-primary fw-bold"
              onClick={() => setShow(true)}
            >
             
              Add Product
            </button>
          </div>

          {show && (
            <div className="col-8 mx-auto">
              <div className="product-form">
                <div className="field-container">
                  <label htmlFor="image">
                    Image Link <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    required
                    className="custom-field"
                    value={product.image}
                    onChange={changeHandler }
                    placeholder="https://cdn.pixabay.com/photo/2015/08/25/03/50/basil-906137_960_720.jpg"
                    id="image"
                  />
                </div>

                <div className="field-container">
                  <label htmlFor="title">
                    Product Title <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={product.title}
                    onChange={changeHandler }
                    className="custom-field"
                    placeholder="Best Ever Perfume"
                    id="title"
                  />
                </div>

                <div className="field-container">
                  <label htmlFor="desc">
                    Product Description <span>*</span>
                  </label>
                  <textarea
                    name="desc"
                    id="desc"
                    required
                    value={product.desc}
                    onChange={changeHandler }
                    className="custom-field"
                  ></textarea>
                </div>

                <div className="field-container">
                  <label htmlFor="price">
                    Price <span>*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    required
                    value={product.price}
                    onChange={changeHandler }
                    className="custom-field"
                    placeholder="100"
                    id="price"
                  />
                </div>

                <div className="d-flex justify-content-between mt-3">
                  <button
                    className="btn btn-danger fw-bold"
                    onClick={() => setShow(false)}
                  >
                    Cancel
                  </button>
                  <button className="btn btn-primary fw-bold" onClick={addProduct}>
                    Add Product
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="col-8 mx-auto mt-5">



{
  (products.length > 0)? products.map((product,index) => {
    return(
      <div className="custom-card mt-5">
      <div className="row">
        <div className="col-3">
          <img
            src={product.image}
            alt=""
            className="img-fluid"
          />
        </div>

        <div className="col-5">
          <h3>{ product.title } </h3>
          <p>
            { product.desc }
          </p>
          <p className="price">
            <b> {product.price} TND</b>
          </p>
        </div>

        <div className="col-4 d-flex justify-content-end ">
          <button className="btn btn-primary fw-bold mt-auto me-4" onClick={()=>editProduct(product)}>
            Edit
          </button>
          <button className="btn btn-danger fw-bold mt-auto" onClick={()=>deleteProduct(product._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>

    )

  }) : <h1>No Products</h1>
}

            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
