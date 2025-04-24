import './App.css'

type Food = {
  img_url: string,
  name: string,
  price: number,
  quantity: number
}

function App() {

  let foodList: Food[] = [
    {img_url: './Burger_148.png', name: 'Burger', price: 4.99, quantity: 0},
    {img_url: './Fries_148.png', name: 'Fries', price: 1.49, quantity: 0},
    {img_url: './Hotdog_148.png', name: 'Hotdog', price: 3.49, quantity: 0},
    {img_url: './Tako_148.png', name: 'Taco', price: 3.99, quantity: 0},
    {img_url: './Pizza_148.png', name: 'Pizza', price: 7.99, quantity: 0},
    {img_url: './Donut_148.png', name: 'Donut', price: 1.49, quantity: 0},
    {img_url: './Popcorn_148.png', name: 'Popcorn', price: 1.99, quantity: 0},
    {img_url: './Coke_148.png', name: 'Coke', price: 1.49, quantity: 0},
    {img_url: './Icecream_148.png', name: 'Icecream', price: 5.99, quantity: 0},
    {img_url: './Cookie_148.png', name: 'Cookie', price: 3.99, quantity: 0},
    {img_url: './Flan_148.png', name: 'Flan', price: 7.99, quantity: 0},
    {img_url: './Cake_148.png', name: 'Cake', price: 9.99, quantity: 0},
  ]

  function createFoodIteam(index: number) {

  return (
    <div className='menu-iteam'>
      {foodList[index].quantity ? <div className='counter'>
        {foodList[index].quantity}
      </div> : null}
      <div className='photo'>  
        <img src={foodList[index].img_url}></img>
      </div>
      <div className='label'>
        <span className='title'>{foodList[index].name}</span>
        <span className='price'>{foodList[index].price}$</span>
      </div>
      <div className='buttons'>
        {foodList[index].quantity ? <button className='minus'
          onClick={() => foodList[index].quantity = foodList[index].quantity - 1}
        >
          -
        </button> : null}
        {foodList[index].quantity ? <button className='plus'
          onClick={() => foodList[index].quantity = foodList[index].quantity + 1}
        >
          +
        </button> : 
        <button className='add'
          onClick={() => foodList[index].quantity = foodList[index].quantity + 1}
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
    </>
  )
}

export default App
