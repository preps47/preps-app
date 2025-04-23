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

  const foodList: Food[] = [{img_url: 'url', name: 'name', price: 0, quantity: 0}]

  return (
    <>
      <div className='main-page'>
        {foodList.map(createFoodIteam)}
      </div>
    </>
  )
}

export default App
