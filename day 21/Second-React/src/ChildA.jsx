import React from 'react'
import ChildA from './ChildA'

function ChildA(props) {
    return(
        <div>
            childA
            <br />
            Number :{props.num} <br />
            String :{props.str} <br />
            IsPassed : {props.isPassed.toString()}
            <br />
            Array Element 
            {
                props.arr.map((V,i)=>{
                    <div>{V}</div>
                })
            }
            {props.arr.join(",")}
            <br />
            <ChildB num={props.num}/>
        </div>
    )
}
export default ChildB