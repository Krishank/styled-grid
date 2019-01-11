import React from "react";
import { Header } from '../components/Header';
import ProductsContainer from './ProductsContainer';
import { Container, Row, Col } from 'styled-bootstrap-grid';

class App extends React.Component {
    render() {
      const navData = [
        {
          "text":"Home",
          "link":"#"
        },
        {
          "text":"Products",
          "link":"#"
        },
        {
          "text":"About",
          "link":"#"
        },
        {
          "text":"Service",
          "link":"#"
        },
        {
          "text":"Contact",
          "link":"#"
        }
      ];
        return (
            <Container>

              <Row>
                  <Header navData={navData} />
              </Row>

              <Row>
                  <ProductsContainer />
              </Row>

            </Container>
        );
    }
}

export default App;
