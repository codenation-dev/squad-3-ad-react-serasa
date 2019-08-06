import React from 'react'
import styled from 'styled-components'

const TitleListYear = styled.span`
    font-weight: bold
`

const TitleListValue = styled.span`
    font-weight: bold;
    float: right
`

const Bar = styled.span`
    display: block; 
    background: #FAFAFA;
    height: 3px;
    overflow: hidden;

    span {
        height: 3px;
        float: left;
        background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
        width: ${props => `${props.porc}`};
    }

`

const ListResumeRepos = ({total, year, value}) => {
    let percentage = `${value * (100 / total )}%`

    return (
        <div style={{'margin': '20px 0px'}}>
            <TitleListYear>{year} </TitleListYear>
            <TitleListValue>{value}</TitleListValue>
            <Bar porc={percentage}>
                <span ></span>
            </Bar>
                
        </div>

    )
}

export default ListResumeRepos
