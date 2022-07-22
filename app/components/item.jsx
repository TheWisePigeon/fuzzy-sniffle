import { items } from "../__mocks__/items";

export default function Item(props) {
    return (
        <>
            <div class="w-fit flex-col text-lg font-bold font-mono">
                <img src={`${props.image}`} alt=""/>
                    <div class="flex justify-between">
                        <div>{props.brand} {props.model}</div>
                        <div>{props.price}/Jour</div>
                    </div>
            </div>
        </>
    )
}