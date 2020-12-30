import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';


class Card extends Component{
 render()
    {
      return(
    <Link to={this.props.product.linkUrl}><div className='card-container'>
        <img alt="product" src={`${this.props.product.img}`}/>
        <h2>{this.props.product.name}</h2>
        <h1>{this.props.product.img}</h1>
    </div>
    </Link>
    )}
};

export default Card;