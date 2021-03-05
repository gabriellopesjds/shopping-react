import React from 'react'
import {Wrapper, Title, Array} from './ShoppingList.styles'
import CheckboxShared from '../../shared/Checkbox/CheckboxShared'
import {useSelector} from 'react-redux'
import { selectAllProducts, selectAllProductsSelected } from '../../store/Products/Products.selectors'

function ShoppingList({title, onClick, displayOnlySelected}){

    const products = useSelector(
        displayOnlySelected ? selectAllProductsSelected : selectAllProducts
    )
    
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