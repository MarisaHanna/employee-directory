import React from 'react'
import { Card } from 'react-bootstrap'

export default function People({name}) {
    return (
       <Card>
           <Card.Body>
             <div className= 'd-flex justify-content-between'>
                <div>
                    <Card.Title>
                        {name.name.first}<span> </span>{name.name.last} - <span className='text-muted font-weight-light'>Age {name.dob.age}</span>
                    </Card.Title>
                    <Card.Subtitle>
                       {name.email} 
                    </Card.Subtitle>
                  </div>  
             </div>  
           </Card.Body>
        </Card> 
    )
}
