import React from 'react'
import {Wrapper, Title, Array} from './ShoppingList.styles'
import CheckboxShared from '../../shared/Checkbox/CheckboxShared'

function ShoppingList({title, products, onClick}){
    return <Wrapper>
        <Title>
           {title}:
        </Title>

        <Array>
            {
                products.map(p => {
                    return <CheckboxShared 
                                key = {p.id}
                                value = {p.checked} 
                                title = {p.name}
                                onClick = {() => onClick(p.id)}/>  
                })
            }   

        </Array>
        
    </Wrapper>
}

export default ShoppingList