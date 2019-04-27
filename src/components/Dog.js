import React from 'react';
import './Dog.scss';


const Dog = props => {
    const newArray= [];
    return (
        
                <div>
    
                    {props.dogList.filter(function (dog) {
                        if (dog.includes(props.doggy) && props.doggy.length > 0) {
                         newArray.push(dog);
                        } else {
                           return false
                        }
                    })}
                    
                    {newArray.map(dog => <img src={dog} key={Math.random()}/>)}
                </div>
            
    )
}

export default Dog;