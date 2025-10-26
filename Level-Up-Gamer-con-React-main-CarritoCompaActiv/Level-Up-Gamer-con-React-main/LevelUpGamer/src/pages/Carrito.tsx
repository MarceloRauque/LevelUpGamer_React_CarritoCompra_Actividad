// src/pages/Carrito.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import type { CartItem } from '../App'; 

interface CarritoProps {
  cartItems: CartItem[];
  updateQuantity: (productId: number, change: number) => void;
  removeFromCart: (productId: number) => void;
}


const formatPrice = (price: number) => {
    return price.toLocaleString('es-CL', { minimumFractionDigits: 0 });
};

export const Carrito: React.FC<CarritoProps> = ({ cartItems, updateQuantity, removeFromCart }) => {
  

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxRate = 0.19; // IVA
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  

  if (cartItems.length === 0) {
    return (
      <section className="bg-azul py-5" style={{minHeight: '80vh'}}>
        <div className="container bg-dark-transparent p-5 rounded-3 text-center">
            <h2 className="orbitron text-shadow text-verde mb-4">Tu Carrito está Vacío 😔</h2>
            <p className="lead">¡Explora nuestros productos para encontrar tu próxima mejora!</p>
            <Link to="/products" className="checkout-btn btn mt-4">
                Ver Productos
            </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-azul text-light py-5">
      <div className="container bg-dark-transparent p-4 rounded shadow-lg">
        <h2 className="text-center text-verde orbitron text-shadow mb-4">🛒 Tu Carrito de Compras</h2>
  
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle text-center carrito-table">
            <thead>
              <tr className="text-verde">
                <th className='text-start'>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="tabla-carrito">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className='d-flex align-items-center text-start'>
                    <img src={item.imageSrc} alt={item.title} className="carrito-thumb-img me-3" />
                    {item.title}
                  </td>
                  <td>${formatPrice(item.price)}</td>
                  <td>
                    {}
                    <div className="quantity-controls mx-auto input-group input-group-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)} 
                        disabled={item.quantity <= 1} 
                        className="quantity-btn btn btn-outline-primary"
                      >
                        -
                      </button>
                      <span className="quantity-display form-control text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)} 
                        className="quantity-btn btn btn-outline-primary"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className='item-subtotal fw-bold'>
                    ${formatPrice(item.price * item.quantity)}
                  </td>
                  <td>
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="remove-btn btn btn-sm btn-outline-danger"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {}
        <div className="d-flex flex-column flex-md-row justify-content-end align-items-end mt-4">
          <div className='total-summary p-3 rounded-3 bg-black-transparent'>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal (Neto):</span>
              <span>${formatPrice(subtotal)}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Impuestos (19%):</span>
              <span>${formatPrice(tax)}</span>
            </div>
            <hr className='border-primary' />
            <div className="d-flex justify-content-between total-line">
              <h4 className="orbitron">Total:</h4>
              <h4 className='fw-bold'>${formatPrice(total)}</h4>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-end align-items-center mt-3">
            <div className="d-flex gap-2">
              <button id="vaciar" className="btn btn-outline-danger">Vaciar Carrito</button>
              <button className="checkout-btn btn">Finalizar Compra</button>
            </div>
        </div>

      </div>
    </section>
  )
}
