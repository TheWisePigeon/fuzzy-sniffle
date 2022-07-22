import { items } from "../__mocks__/items"
import Item from "./item"
export default function ItemList(){
    return (
        <div className=" p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
            {
                items.map(
                    item=>{
                        return(
                            <Item key={item.model} model={item.model} brand={item.brand} image={item.image} price={item.price} />
                        )
                    }
                )
            }
        </div>
    )
}

/**
 *  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
 */