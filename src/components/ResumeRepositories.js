import React from 'react'

const ResumeRepositories  = ({repos}) => {
      
        const getTotalRepositoryYear = repos.map(item => {      
            return item.created_at.slice(0,4)
        }).reduce((obj, item) => {
            if ( !obj[item] ) {
                obj[item]=1;
             }else{
                 obj[item]++
             }
            return obj
        },{})

        const result = (yearsRepository) => {          
            return Object.keys(yearsRepository).map(key => (
            <div key={key}>  
                <strong>{key}</strong>
                <p>{yearsRepository[key] <= 1 ?  `${yearsRepository[key]} Repositório criado` : `${yearsRepository[key]} Repositórios criados.`}</p>
            </div>
        )).reverse()
    }
        return (
            <div >
               {result(getTotalRepositoryYear)}
            </div>
        )

 
}


export default ResumeRepositories;