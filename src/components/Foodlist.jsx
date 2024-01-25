import React from 'react'
import Fooditem from './Fooditem';

export default function Foodlist(props) {
    let item = props.item;

    if(item.length===0){
            return <div className="alert alert-primary" role="alert">
            No food!
          </div>;
        }

        else{
            return (
                <>   
                <div className='container pt-4'>
                    <h3 className='pb-3'>Food items</h3>
                <ul className="list-group">
                    {
                    item.map((x)=>{
                        console.log(x);
                        return <Fooditem x={x}/>
                    })}
                </ul>
                </div>
                </>
              );
        }
  
}