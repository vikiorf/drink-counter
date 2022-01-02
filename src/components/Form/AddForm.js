import React, { useState } from 'react'

import styles from './AddForm.module.css'

const AddForm = props => {
  const [drinkType, setDrinkType] = useState('beer')

  const changeDrinkTypeHandler = ev => {
    setDrinkType(ev.target.value)
  }

  const submitHandler = ev => {
    ev.preventDefault()
    let name = drinkType

    // First letter to uppercase
    name = name.charAt(0).toUpperCase() + name.slice(1)
    if (name === 'StrongDrink') name = 'Strong Drink'

    let drinkObject = {
      name: name,
      id: Math.random().toString(),
      quantity: 1
    }
    props.onAddDrink(drinkObject)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <select value={drinkType} onChange={changeDrinkTypeHandler}>
        <option value='beer'>Beer</option>
        <option value='wine'>Wine</option>
        <option value='strongDrink'>Strong Drink</option>
        <option value='shot'>Shot</option>
        <option value='other'>Other</option>
      </select>
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddForm
