import React from 'react';
import './cart-dropdown.styles.css';
import {connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
      <div className='cart-items' />
       {
         cartItems.map(cartItem=><CartItem key={cartItem.id} item={cartItem} />)
       }
      <button>
       
          CHECKOUT
      </button>
    </div>
  );
  
  const mapStateToProps=({cart:{cartItems}})=>({
    cartItems
  })
  export default connect(mapStateToProps,null)(CartDropdown);