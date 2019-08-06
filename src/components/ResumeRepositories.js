import React from 'react'

import ListResumeRepos from './ListResumeRepos'

const ResumeRepositories  = ({repos}) => {

    const total = repos.length

    let repositoryByYear = repos.reduce((item, year) => {    
        let yearSelect =  year.created_at.slice(0,4)
         if ( !item[yearSelect] ) {
            item[yearSelect]=1;
          }else{
            item[yearSelect]++
          }
         return item
     }, {})
     
     const listResumeYear = Object.keys(repositoryByYear).map(year => (
         <ListResumeRepos key={year} year={year} value={repositoryByYear[year]} total={total}/>
     )).reverse()

    return (
        <div >
            {listResumeYear}
        </div>
    )
}

export default ResumeRepositories;