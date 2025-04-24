import { useState } from 'react'
import './App.css'
import { MainButton } from '@twa-dev/sdk/react'

type Food = {
  img_url: string,
  name: string,
  price: number,
}

function App() {

  const [quantities, setQuantities] = useState(Array.from(Array(12).keys()).map(_ => 0))

  const foodList: Food[] = [
    {img_url: './Burger_148.png', name: 'Burger', price: 4.99},
    {img_url: './Fries_148.png', name: 'Fries', price: 1.49},
    {img_url: './Hotdog_148.png', name: 'Hotdog', price: 3.49},
    {img_url: './Tako_148.png', name: 'Taco', price: 3.99},
    {img_url: './Pizza_148.png', name: 'Pizza', price: 7.99},
    {img_url: './Donut_148.png', name: 'Donut', price: 1.49},
    {img_url: './Popcorn_148.png', name: 'Popcorn', price: 1.99},
    {img_url: './Coke_148.png', name: 'Coke', price: 1.49},
    {img_url: './Icecream_148.png', name: 'Icecream', price: 5.99},
    {img_url: './Cookie_148.png', name: 'Cookie', price: 3.99},
    {img_url: './Flan_148.png', name: 'Flan', price: 7.99},
    {img_url: './Cake_148.png', name: 'Cake', price: 9.99},
  ]

  function manageQuantity(index: number, func: (arg: number) => number) {
    setQuantities(q => q.map((value, i) => {
      if (i == index) {
        return func(value)
      } else {
        return value
      }
    }))
  }

  function createFoodIteam(index: number) {

  return (
    <div className='menu-iteam'>
      {quantities[index] ? <div className='counter'>
        {quantities[index]}
      </div> : null}
      <div className='photo'>  
        <img src={foodList[index].img_url}></img>
      </div>
      <div className='label'>
        <span className='title'>{foodList[index].name}</span>
        <span className='price'>{foodList[index].price}$</span>
      </div>
      <div className='buttons'>
        {quantities[index] ? <button className='minus'
          onClick={() => manageQuantity(index, (n) => n - 1)}
        >
          -
        </button> : null}
        {quantities[index] ? <button className='plus'
          onClick={() => manageQuantity(index, (n) => n + 1)}
        >
          +
        </button> : 
        <button className='add'
          onClick={() => manageQuantity(index, (n) => n + 1)}
        >
          ADD
        </button>}
      </div>
    </div>
  )
  }

  return (
    <>
      <div className='main-page'>
        {Array.from(Array(12).keys()).map(createFoodIteam)}
      </div>
      {quantities.filter(n => n > 0).length ? <MainButton text='View Order'/> : null}
    </>
  )
}

export default App
