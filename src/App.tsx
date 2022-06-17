import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route} from 'react-router-dom'

import './App.scss'

import Nav from './components/layout/nav/nav';
import Footer from './components/layout/footer/footer';
import App_main_content from './components/app_main_components/app_main_content';
import Menu from './components/menu_components/menu';
import Shopping_cart from './components/layout/shopping_cart/shopping_cart';
import { getPositions } from './axios/position';


function App() {
  const [cartItems, setCartItems]=useState<(IFood)[]>([]);
  const onAdd = (position:IFood) =>{
    setCartItems([...cartItems, position]) 
    alert('Added to Cart')
  } 

  const [foodArray, setFoodArray]=useState<IFood[]>([]);
  const [isLoading, setLoading]=useState(true); 
  useEffect(()=>{
    getPositions().then(answer=>{
      setFoodArray(answer.data) 
      setLoading(false)
    })
  }, [])
if (isLoading) return<div>Loading...</div>

  return ( 
    <BrowserRouter>
      <div className='app_wrapper'>
        <Nav />
        <div className="app_content">
            <Route exact path='/' component={App_main_content} />
            
            <Route path='/menu'> 
              <Menu onAdd ={onAdd} food={foodArray}></Menu>
            </Route>
        </div> 
        <Footer />
        <Shopping_cart cartItems={cartItems} food={foodArray} className='app_cart' />   
      </div>
      </BrowserRouter>
  ) 
}

export default App;
