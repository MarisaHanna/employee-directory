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
                        <h6>Email : <a href={`mailto:${name.email}`}>{name.email}</a></h6>
                        <h6>Phone : {name.cell}</h6>
                       
                    </Card.Subtitle>
                  </div>  
                   <img src= {name.picture.medium}/>                   
             </div>  
           </Card.Body>
        </Card> 
    )
}
