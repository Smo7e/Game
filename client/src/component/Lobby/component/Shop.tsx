import React, { useContext, useState, useEffect } from "react"; 
import Panel from "../panel/Panel"; 
import { ServerContext } from "../../../App"; 
 
export interface Product { 
  image: string; 
  name: string; 
  description: string; 
  text?: string; 
} 
 
const Shop: React.FC = () => { 
  const server = useContext(ServerContext); 
  const [items, setItems] = useState<Product[]>([]); 
  const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([]); 
  const item = server.getItems();  
 
  const buyProduct = (index: number) => { 
    const product = items[index]; 
    setPurchasedProducts((prevProducts) => [...prevProducts, product]); 
  }; 
 
  return ( 
    <div className="baguetteM"> 
      <div className="shop"> 
        {items.map((item, index) => ( 
          <div className="buy" key={index} onClick={() => buyProduct(index)}> 
            <img src={item.image} className="image" alt={item.name} /> 
            <span className="name">{item.name}</span> 
            <span className="description">{item.description}</span> 
            {item.text && <span className="text">{item.text}</span>} 
          </div> 
        ))} 
      </div> 
      <div className="coin">5</div> 
      <Panel /> 
    </div> 
  ); 
}; 
 
export default Shop;