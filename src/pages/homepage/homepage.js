import React, { Component } from 'react';
import './homepage.styles.css';
import Header from '../../components/Header/header.component';
import Slider from '../../components/Slider/slider.component';
import {CardList} from '../../components/CardList/cardList.component';
class Homepage extends Component {
    constructor(){
        super();
        this.state={
          products:[],
          searchField:''
        };
      }

      componentDidMount(){
        fetch('https://run.mocky.io/v3/5ea1d448-fe8d-4086-816a-97d865aca11f')
        .then(response=>response.json())
        .then(category=>this.setState({products:category}))
      }
    render() {
      const {products,searchField}=this.state;
      const filteredProducts=products.filter(product=>
      product.name.toLowerCase().includes(searchField.toLowerCase())
      );
        return (
            <div>
                <Header 
                  className="header_input" 
                  placeholder="search Categories" 
                  handleChange={e => this.setState({searchField:e.target.value})} />
                <input
                  className="header_input" 
                  placeholder="search Categories" 
                  onChange={e => this.setState({searchField:e.target.value})} 
                />
                <Slider/>
                {
                  filteredProducts.map(List=>(
                  <CardList key={List.id} List={List} />
                  ))
                } 
              
            </div>
        );
   }
}

export default Homepage;
