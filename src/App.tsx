import './App.css'
//import WebApp from '@twa-dev/sdk'
//import * as motion from 'motion/react-client'

type Food = {
  img_url: string,
  name: string,
  price: number,
  quantity: number
}

function createFoodIteam(iteam: Food) {

  return (
    <div>
      <div className='menu-iteam'>
        <div className='counter'>
          {iteam.quantity}
        </div>
        <div className='photo'>
          <picture>
            <img src={iteam.img_url}></img>
          </picture>
        </div>
        <div className='label'>
          <span className='title'>{iteam.name}</span>
          <span className='price'>{iteam.price}</span>
        </div>
      </div>
    </div>
  )
}

function App() {

  const foodList: Food[] = [
    {img_url: './public/Burger_148.png', name: 'Burger', price: 4.99, quantity: 0},
    {img_url: './public/Fries_148.png', name: 'Fries', price: 1.49, quantity: 0},
    {img_url: './public/Hotdog_148.png', name: 'Hotdog', price: 3.49, quantity: 0},
    {img_url: './public/Tako_148.png', name: 'Taco', price: 3.99, quantity: 0},
    {img_url: './public/Pizza_148.png', name: 'Pizza', price: 7.99, quantity: 0},
    {img_url: './public/Donut_148.png', name: 'Donut', price: 1.49, quantity: 0},
    {img_url: './public/Popcorn_148.png', name: 'Popcorn', price: 1.99, quantity: 0},
    {img_url: './public/Coke_148.png', name: 'Coke', price: 1.49, quantity: 0},
    {img_url: './public/Icecream_148.png', name: 'Icecream', price: 5.99, quantity: 0},
    {img_url: './public/Cookie_148.png', name: 'Cookie', price: 3.99, quantity: 0},
    {img_url: './public/Flan_148.png', name: 'Flan', price: 7.99, quantity: 0},
    {img_url: './public/Cake_148.png', name: 'Cake', price: 9.99, quantity: 0},
]

  return (
    <>
      <div className='main-page'>
        {foodList.map(createFoodIteam)}
      </div>
    </>
  )
}

export default App
