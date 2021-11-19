import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({ greeting }) => {
  const [stock, setStock] = useState(5);
  

  return (
    <div>
      <h1 style={{ color: "#017a49",  }}>{greeting}</h1>
      <ItemCount 
        stock={5} 
        initial={1} 
      />
    </div>
  )
}

export default ItemListContainer
