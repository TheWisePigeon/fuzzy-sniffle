import { items } from "../__mocks__/items"
import Item from "./item"
export default function ItemList(){
    return (
        <>
            {
                items.map(
                    item=>{
                        return(
                            <Item key={item.model} model={item.brand} />
                        )
                    }
                )
            }
        </>
    )
}