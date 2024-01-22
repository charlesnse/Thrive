import React from 'react'
import NumberFormat from 'react-number-format'

function CurrencyFormat(props) {
  return (
    <NumberFormat value={props.price} displayType="text" thousandSeparator={true} prefix="₦ " />
  )
}

export default CurrencyFormat