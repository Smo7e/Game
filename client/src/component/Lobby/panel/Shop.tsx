import React, { useContext, useState, useEffect } from "react";
import Panel from "./Panel";
import { ServerContext } from "../../../App";
import "./Shop.css";

export interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    text?: string;
}

const Shop: React.FC = () => {
    const server = useContext(ServerContext);
    const [items, setItems] = useState<Product[]>([]);
    const [purchasedProducts, setPurchasedProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await server.getItemsForShop();
            if (Array.isArray(result) && result.length > 0) {
                setItems(result);
            }
        };

        fetchData();
    }, [server]);

    const buyProduct = (product: Product) => {
        if (purchasedProducts.length < 5) {
            setPurchasedProducts((prevProducts: Product[]): Product[] => {
                const updatedProducts = [...prevProducts, product];

                const lastProductId = product.id;

                server.addItemsGamers([lastProductId]);

                return updatedProducts;
            });
        }
    };

    return (
        <div className="baguetteM">
            <div className="shop">
                <div className="listItems">
                    {items.map((product, index) => (
                        <div className="product" key={index}>
                            <img src={product.image} className="imageItem" />
                            <div className="product-details">
                                <button
                                    className="buyItemButton"
                                    onClick={() => buyProduct(product)}
                                >
                                    Купить
                                </button>
                                <span className="name">{product.name}: </span>
                                <span className="description">{product.description}</span>
                                {product.text && <span className="text">{product.text}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="coin"> 5</div>
            <Panel purchasedProducts={purchasedProducts} />
        </div>
    );
};

export default Shop;
