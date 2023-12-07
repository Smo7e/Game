// import React from "react";


// const Shop: React.FC = () => {
//     const panelCount = 6; 

   


//     return (
//         <div className="baguetteM"> 
//         <div className="shop"> 
//         <div className="buy"> 
//           <div className="baguette" > 
//           <text className="B">Багет</text> 
//           <text className="textB">Восстанавливает 25 единиц здоровья</text> 
//           </div>
//  </div>
//  <div className="buy">  
//           <div className="sausageindough" > 
//           <text className="SD">Сосиска в тесте</text> 
//           <text className="textS">Восстанавливает 15 единиц здоровья</text> 
//           </div>
//  </div>
//  <div className="buy"> 
          
//           <div className="energydrink" >
//           <text className="E">Энергос</text> 
//           <text className="textE"> 
//             Восстанавливает 15 единиц здоровья, увеличивает урон следующей атаки на 10 
//           </text> 
//           </div>
//  </div> 
//  <div className="buy"> 
//           <div className="cigarettes" >
//           <text className="C">Сигареты</text> 
//           <text className="textC"> 
//             Уменьшает текущее здоровье на 20, 
//           <text className="textCI"> но на время боя увеличивает урон каждой атаки на 10 </text>
//           </text> 
//         </div>  
//  </div> 
//  <div className="buy"> 
//           <div className="beer">
//           <text className="B">Пиво</text> 
//           <text className="textB"> 
//             Восстанавливает здоровье на 15 единиц, 
//             <text className="textBeer"> на время боя увеличивает максимальное здоровье на 20 единиц </text>
//           </text>
//       </div>
//           </div>  
//         </div>  
//               <div className="coin"  />
//               {Array.from({ length: panelCount }, (_, index) => ( 
//               <div key={index} className="panel"></div>
//               ))}
//           </div>
    
// );
// };
// export default Shop;













// import React, { useState } from "react";

// const Shop: React.FC = () => {
//     const panelCount = 6;

//     const products = [
//       {
//         image: require("../image/baguette.png"),
//         name: "Багет",
//         description: "Восстанавливает 25 единиц здоровья",
//       },
//       {
//         image: require("../image/sausageindough.png"),
//         name: "Сосиска в тесте",
//         description: "Восстанавливает 15 единиц здоровья",
//       },
//       {
//         image: require("../image/energydrink.png"),
//         name: "Энергос", 
//         description: "Восстанавливает 15 единиц здоровья, увеличивает урон следующей атаки на 10",
//       }, 
//       {
//         image: require("../image/cigarettes.png"),
//         name: "Сигареты",
//         description: "Уменьшает текущее здоровье на 20,", 
//         text: "но на время боя увеличивает урон каждой атаки на 10",
//       },
//       {
//         image: require("../image/beer.png"),
//         name: "Пиво",
//         description: "Восстанавливает здоровье на 15 единиц,",
//         text: "на время боя увеличивает максимальное здоровье на 20 единиц",
//       },
//     ];

//     const [purchasedProducts, setPurchasedProducts] = useState<string[]>([]);

//     const buyProduct = (index: number) => {
//       const purchasedProduct = products[index].name;
//       setPurchasedProducts(prevProducts => [...prevProducts, purchasedProduct]);
//     };



//     return (
//         <div className="baguetteM">
//           <div className="shop">
//             {products.map((product, index) => (
//              <div className="buy" key={index} onClick={() => buyProduct(index)}>
//              <div className={product.name.toLowerCase()}>
//                 <span className="name">{product.name}</span>
//                 <img src={product.image} className="image" />
//                 <span className="description">{product.description}</span>
//                 <span className="text">{product.text}</span>

//              </div>
//              </div>
//              ))}
//           </div>
//           <div className="coin" >5</div>
          
//           {Array.from({ length: panelCount }, (_, index) => (
//           <div key={index} className="panel">
//             <img src={products.find((p) => p.name === purchasedProducts[index])?.image} />
//           </div>
//           ))}
//          </div>
//     );
// };

// export default Shop;




// import React, { useState } from "react";

// interface TProducts {
//   image: string;
//   name: string;
//   description: string;
//   text?: string;
// }

// const Shop: React.FC = () => {
//   const panelCount = 6;

//   const Products: TProducts[] = [
//     {
//       image: require("../image/baguette.png"),
//       name: "Багет",
//       description: "Восстанавливает 25 единиц здоровья",
//     },
//     {
//       image: require("../image/sausageindough.png"),
//       name: "Сосиска в тесте",
//       description: "Восстанавливает 15 единиц здоровья",
//     },
//     {
//       image: require("../image/energydrink.png"),
//       name: "Энергос",
//       description: "Восстанавливает 15 единиц здоровья, увеличивает урон следующей атаки на 10",
//     },
//     {
//       image: require("../image/cigarettes.png"),
//       name: "Сигареты",
//       description: "Уменьшает текущее здоровье на 20,",
//       text: "но на время боя увеличивает урон каждой атаки на 10",
//     },
//     {
//       image: require("../image/beer.png"),
//       name: "Пиво",
//       description: "Восстанавливает здоровье на 15 единиц,",
//       text: "на время боя увеличивает максимальное здоровье на 20 единиц",
//     },
//   ];

//   const [purchasedProducts, setPurchasedProducts] = useState<string[]>([]);

//   const buyProduct = (index: number) => {
//     const purchasedProduct = Products[index].name;
//     setPurchasedProducts((prevProducts) => [...prevProducts, purchasedProduct]);
//   };

//   return (
//     <div className="baguetteM">
//       <div className="shop">
//         {Products.map((product, index) => (
//           <div className="buy" key={index} onClick={() => buyProduct(index)}>
//             <div className={product.name.toLowerCase()}>
//               <span className="name">{product.name}</span>
//               <img src={product.image} className="image" />
//               <span className="description">{product.description}</span>
//               <span className="text">{product.text}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="coin">5</div>
//       {Array.from({ length: panelCount }, (_, index) => (
//         <div key={index} className="panel">
//           <img
//             src={Products.find((p) => p.name === purchasedProducts[index])?.image}
//             alt=""
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shop;








import React, { useState } from "react";
interface Product {
  image: string;
  name: string;
  description: string;
  text?: string;
}
const Shop: React.FC = () => {
  const panelCount = 6;

  const [products] = useState<Product[]>([
    {
      image: require("../image/baguette.png"),
      name: "Багет",
      description: "Восстанавливает 25 единиц здоровья",
    },
    {
      image: require("../image/sausageindough.png"),
      name: "Сосиска в тесте",
      description: "Восстанавливает 15 единиц здоровья",
    },
    {
      image: require("../image/energydrink.png"),
      name: "Энергос",
      description: "Восстанавливает 15 единиц здоровья, увеличивает урон следующей атаки на 10",
    },
    {
      image: require("../image/cigarettes.png"),
      name: "Сигареты",
      description: "Уменьшает текущее здоровье на 20 , 
      <br />
      но на время боя увеличивает урон каждой атаки на 10",
    },
    {
      image: require("../image/beer.png"),
      name: "Пиво",
      description: "Восстанавливает здоровье на 15 единиц , на время боя увеличивает максимальное здоровье на 20 единиц",
    },
  ]);

  const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([]);

  const buyProduct = (index: number) => {
    const product = products[index];
    setPurchasedProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <div className="baguetteM">
      <div className="shop">
        {products.map((product, index) => (
          <div className="buy" key={index} onClick={() => buyProduct(index)}>
            <img src={product.image} className="image" alt={product.name} />
            <span className="name">{product.name}</span>
            <span className="description">{product.description}</span>
            {product.text && <span className="text">{product.text}</span>}
          </div>
        ))}
      </div>
      <div className="coin">5</div>
      <div className="panels">
        {Array.from({ length: panelCount }, (_, index) => (
          <div key={index} className="panel">
            <img
              src={purchasedProducts[index]?.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;


