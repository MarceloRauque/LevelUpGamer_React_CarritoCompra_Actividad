// src/App.tsx

import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Registro } from "./pages/Registro"
import { Products } from "./pages/Products"
import { Login } from "./pages/Login"
import { Carrito } from "./pages/Carrito"
import { ProductDetail } from "./pages/ProductDetail"
import { Layout } from "./layout/Layout"
import { Navbar } from './components/Navbar';

// Usamos 'import type' para importar solo el tipo, solucionando el error ts(1484)
import type { Product } from './data/products'; 

// --- DEFINICIÓN DEL TIPO CartItem (CONSOLIDADA) ---
// La exportamos para que Carrito.tsx y Products.tsx puedan importarla.
export type CartItem = Product & {
  quantity: number;
};

function App() {
  // --- ESTADO DEL CARRITO CON USESTATE ---
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // --- FUNCIÓN PARA AGREGAR PRODUCTOS ---
  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // --- FUNCIÓN PARA SUMAR O RESTAR LA CANTIDAD (+1 o -1) ---
  const updateQuantity = (productId: number, change: number) => {
    setCartItems(prevItems => {
      return prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + change }
          : item
      ).filter(item => item.quantity > 0); 
    });
  };

  // --- FUNCIÓN PARA REMOVER COMPLETAMENTE ---
  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };


  // --- CÁLCULO DEL TOTAL DE ÍTEMS PARA EL CONTADOR DE NAVBAR ---
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
    <Navbar totalItems={totalItems} /> 
    
    <Routes>
      <Route element={<Layout />}>
        {/* PASAMOS la función addToCart al componente Products */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        
        {/* PASAMOS el estado y las funciones al componente Carrito */}
        <Route path="/cart" 
          element={
            <Carrito 
              cartItems={cartItems} 
              updateQuantity={updateQuantity} 
              removeFromCart={removeFromCart} 
            />
          } 
        />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
    </>
  )
}

export default App