import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../src/store/product/actionCreator";

const products = ({ getAllProducts, ...rest }) => {
    const { products } = rest;
  useEffect(() => {
    getAllProducts();
    console.log(rest);
  }, []);
  return <div>{JSON.stringify(products)}</div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducts: () => dispatch(getAllProducts()),
  };
};
const mapStateToProps = (state) => {
  return { products: state.product.products };
};

export default connect(mapStateToProps, mapDispatchToProps)(products);
