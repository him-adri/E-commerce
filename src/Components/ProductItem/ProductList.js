import React from 'react'
import Accessories from './Accessories/Accessories'
import LadiesWear from './LadiesWear/LadiesWear'
import MensWear from './MensWear/MensWear'
import Shoes from './Shoes/Shoes'

const ProductList = () => {
  return (
    <>
        <MensWear />
        <LadiesWear /> 
        <Accessories />
        <Shoes /> 
    </>
  )
}

export default ProductList