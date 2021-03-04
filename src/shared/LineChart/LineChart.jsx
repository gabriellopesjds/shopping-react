import React from 'react'
import {Wrapper, ProgressBar} from './LineChart.styles'

function LineChart({color, title, percentage}){
    return <Wrapper>
        <span>
            {title + ":"}
        </span>
        
        <ProgressBar 
            color = {color}
            percentage = {percentage}/>

    </Wrapper>
}

export default LineChart