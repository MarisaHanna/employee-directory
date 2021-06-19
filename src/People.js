import React from 'react'

export default function People({name}) {
    return (
        <div>
           <>{name.name.first}<span> </span>{name.name.last}</> 
          
        </div>
    )
}
