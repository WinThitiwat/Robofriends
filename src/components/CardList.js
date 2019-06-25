import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // const cardComponent = robots.map((user, idx) => {
    //     return (
    //         <Card 
    //             key={idx}
    //             id={robots[idx].id} 
    //             name={robots[idx].name} 
    //             email={robots[idx].email}
    //             />
    //     )
    // })

    // -- TO TEST ERROR HANDLING, UNCOMMMENT BELOW
    // if (true){
    //     throw new Error("NNOOOOO");
    // }

    console.log("CardList");
    return (
        <div>
            {/* {cardComponent}; */}
            
            {/* we can either uncomment above and run or execute below directly */}
            {
                robots.map((user, idx) => {
                    return (
                        <Card 
                            key={idx}
                            id={robots[idx].id} 
                            name={robots[idx].name} 
                            email={robots[idx].email}
                            />
                    )
                })
            }
        </div>
    )
}

export default CardList;