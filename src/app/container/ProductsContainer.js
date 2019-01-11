import React from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
import { ErrorBoundary } from "./ErrorBoundary";
import { Products } from "../components/Products";
import { loadProducts } from '../actions/productsActions';
import { Row, Col } from 'styled-bootstrap-grid';



//Map which all global State we wanna use as prop in this component
const mapStateToProps = (state)=>{
  return{
    products: state.productsReducer.products
  }
}

// Now this will Update our State
const mapDispatchToProps = (dispatch)=>{
  return{
    loadProducts:()=>{
      dispatch(loadProducts());
    }
  }
}



class ProductsContainer extends React.Component {

  constructor(props){
    super();
    this.state = {
      "products": props.products
    };

  }
  componentDidMount(){
    this.props.loadProducts();
  }

    render() {
        return (
          <React.Fragment>
            <Col lg="12">
              <Row>
                <ErrorBoundary erroMessage="Failed in Products Component">
                  <Products products={this.props.products} />
                </ErrorBoundary>
              </Row>
            </Col>
          </React.Fragment>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
