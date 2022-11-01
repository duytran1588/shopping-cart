import * as React from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCart';
import { formatCurrency } from '../utilities/formatCurrency';
import CartItem from './CartItem';

export interface ShoppingCartProps {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {

  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item}/> //CartItemProps = {id, quantity} <=> id={item.id} quantity={item.quantity} <=> {...item} (spread operators)
          ))}
          <div className='ms-auto fw-bold fs-5'>
            Total {formatCurrency()}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
//item = {id: 1, quantity: 2} => {id, quantity,...item}