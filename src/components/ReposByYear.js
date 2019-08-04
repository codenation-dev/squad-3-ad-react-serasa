import React from 'react'
import {
        UserStats
    ,   Stats
} from '../styles/Card'
    
    
const createViewByYear = data => {
    let itens = [];
    const reposPerYears = data.map(item => item.created_at.substr(0, 4)).reduce((allYears, year) => {
        if (year in allYears) {
            allYears[year]++;
        }
        else {
            allYears[year] = 1;
        }
        return allYears;

    }, {});
    let key = 0
    for (const year in reposPerYears) {
        itens.push(<Stats key={key}><b>{year}</b> <p>{reposPerYears[year]} repos</p> </Stats>);
        key++;
    }
    /* itens.push(<Stats key={key}><b>2018</b> <p>1584 repos</p> </Stats>);
    itens.push(<Stats key={key}><b>2018</b> <p>1584 repos</p> </Stats>);
    itens.push(<Stats key={key}><b>2018</b> <p>1584 repos</p> </Stats>); */
    return itens;
}

const ReposByYear = ({ data = [] }) => {
    if (data.length) {
        return (
            <UserStats>
                {createViewByYear(data)}
            </UserStats>
        )
    }
    return null
}

export default ReposByYear;