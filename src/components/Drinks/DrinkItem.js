import React from 'react'

import styles from './DrinkItem.module.css'

const DrinkItem = props => {
  const increaseQuantityHandler = () => {
    props.onIncreaseQty(props.drink)
  }

  const decreaseQuantityHandler = () => {
    props.onDecreaseQty(props.drink)
  }

  return (
    <div className={styles['drink-item']}>
      <button onClick={decreaseQuantityHandler}>-</button>
      <h1>{props.drink.name}</h1>
      <button onClick={increaseQuantityHandler}>+</button>
      <p className={styles['second-column']}> {props.drink.quantity} </p>
    </div>
  )
}

export default React.memo(DrinkItem)
