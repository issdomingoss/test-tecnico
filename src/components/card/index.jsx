import { useContext } from "react"
import { DBProductsContext } from "../../providers/db"
import { CardWrap } from "./style"; 

export const Card = () => {

    const { productList }= useContext(DBProductsContext);
    
    return(
        <>
            {
                productList.userData.offers.map((item) => 
                <CardWrap key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </CardWrap>)
            }
        </>
    );
};