import React from 'react'
import {Wrapper, Indicator} from './CheckboxShared.styles'

function CheckboxShared({ value, title, onClick }){
    return <Wrapper onClick={onClick}>
        <Indicator value={value} />
        {title}
    </Wrapper>
}

export default CheckboxShared