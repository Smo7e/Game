import React from "react";
import { Product } from "./Shop";

interface PanelProps {
    purchasedProducts: Product[];
}

const Panel: React.FC<PanelProps> = ({ purchasedProducts }) => {
    const limitedPurchasedProducts = purchasedProducts.slice(0, 5);
    return (
        <div>
            <div className="inventory">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <div key={index} className="panel">
                        {limitedPurchasedProducts[index] && (
                            <img
                                src={limitedPurchasedProducts[index].image}
                                alt={limitedPurchasedProducts[index].name}
                                className="panel-image"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Panel;
