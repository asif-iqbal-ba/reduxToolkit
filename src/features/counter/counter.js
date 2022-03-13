import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,selectCount } from "./counterSlice";


export function Counter(){
    const counter = useSelector(selectCount)
    const dispatch = useDispatch()
    
    console.log(counter)

    if(counter.isLoading){
        return(
            <div>Loading....</div>
        )
    }

    return(
        <div>
            <div>
                <button onClick={()=>dispatch(increment())}>
                    +
                </button>
                <span>{counter.value}</span>

                <button onClick={()=>dispatch(decrement())}>
                    -
                </button>

            </div>
        </div>
    )

}