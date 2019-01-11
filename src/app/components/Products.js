import React from "react";
import PropTypes from 'prop-types';
import { Col } from 'styled-bootstrap-grid';

export class Products extends React.Component {

  genrateProducts(productsData) {
    return productsData && productsData.map( (product, index)=> {

      return (
        <Col lg="4" md="6" mb="4" key={index}>
            <div className="card h-100">
              <a href="#"><img className="card-img-top"  alt="" src={product.image}/></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{product.name}</a>
                </h4>
                <h5>${product.price}</h5>
                <p className="card-text">{product.dec}</p>
              </div>
              <div className="card-footer" raiting={product.raiting}>
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
         </Col>
      )

  });
  }
  render(){
        return(
              <React.Fragment>
                     {this.genrateProducts(this.props.products)}
              </React.Fragment>
            );
    }
  }
