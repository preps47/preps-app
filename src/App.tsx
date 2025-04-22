import './App.css'
import WebApp from '@twa-dev/sdk'
//import * as motion from 'motion/react-client'

type Food = {
  img_url: string,
  name: string,
  quantity: number
}

function App() {

  const foodList: Food[] = [{img_url: 'url', name: 'name', quantity: 0}]

  return (
    <>
      <div>
        <ul>
          {foodList.map(food =>
            <li>
              {food.name}
            </li>  
          )}
        </ul>
      </div>
    </>
  )
}

export default App
