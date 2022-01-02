import { useState } from 'react'
import './App.css'
import DrinkItem from './components/Drinks/DrinkItem'

import AddForm from './components/Form/AddForm'

function App() {
  const [drinks, setDrinks] = useState(
    JSON.parse(localStorage.getItem('drinks'))
      ? JSON.parse(localStorage.getItem('drinks'))
      : []
  )
  const [displayAddDrink, setDisplayAddDrink] = useState(false)

  const displayAddDrinkHandler = () => {
    setDisplayAddDrink(true)
  }

  const saveDrinksToLocalStorage = drinks => {
    localStorage.setItem('drinks', JSON.stringify(drinks))
  }

  const addDrinkHandler = drink => {
    const index = drinks.findIndex(_drink => _drink.name === drink.name)

    const tempDrinks = [...drinks]

    if (index === -1) {
      tempDrinks.push(drink)
      setDrinks(tempDrinks)
    } else {
      tempDrinks[index].quantity += 1

      setDrinks(tempDrinks)
    }
    saveDrinksToLocalStorage(tempDrinks)
    setDisplayAddDrink(false)
  }

  const decreaseQty = drink => {
    const tempDrinks = [...drinks]
    const index = tempDrinks.findIndex(_drink => _drink.id === drink.id)

    tempDrinks[index].quantity -= 1

    if (tempDrinks[index].quantity === 0) tempDrinks.splice(index, 1)

    setDrinks(tempDrinks)
    saveDrinksToLocalStorage(tempDrinks)
  }

  const increaseQty = drink => {
    const tempDrinks = [...drinks]
    const index = tempDrinks.findIndex(_drink => _drink.id === drink.id)

    tempDrinks[index].quantity += 1

    setDrinks(tempDrinks)
    saveDrinksToLocalStorage(tempDrinks)
  }

  return (
    <div className='App'>
      {!displayAddDrink && (
        <button className='add-drink-button' onClick={displayAddDrinkHandler}>
          Add Drink
        </button>
      )}
      {displayAddDrink && <AddForm onAddDrink={addDrinkHandler} />}
      {drinks.length > 0 && (
        <div className='drinks-container'>
          {drinks.map(drink => (
            <DrinkItem
              drink={drink}
              key={drink.id}
              onDecreaseQty={decreaseQty}
              onIncreaseQty={increaseQty}
            >
              {drink.name}
            </DrinkItem>
          ))}
        </div>
      )}
      {drinks.length === 0 && <h1 className='no-drinks-heading'>Add Drink!</h1>}
    </div>
  )
}

export default App
