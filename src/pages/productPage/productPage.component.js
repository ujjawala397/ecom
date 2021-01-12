import React, { Component } from 'react';
import Header from '../../components/Header/header.component';
import {CardProductList} from '../../components/CardProductList/cardProductList.component';
class ProductPage extends Component {
    constructor(props){
        super(props);
        this.state={
          products:[],
          searchField:''
        };
      }
      componentDidMount(){
        fetch('https://run.mocky.io/v3/5ea1d448-fe8d-4086-816a-97d865aca11f')
        .then(response=>response.json())
        .then(category=>this.setState({products:category}));
      }
    render() {
        const { match: { params } } = this.props;
        const {products,searchField}=this.state;
        const filteredProducts=products.filter(product=>
          product.name.toLowerCase().includes(searchField.toLowerCase())
          );
        return(
            <div>                
                <Header/>
                {
                  filteredProducts.map(product=>(
                  <CardProductList key={product.id} item={product} match={params}/>
                  ))
                }
            </div>
        );
    }
}
export default ProductPage;