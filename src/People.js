import React, { useState } from 'react'
import { Card, Badge, Button, Collapse} from 'react-bootstrap'
import images from '../src/components/images/logo.png'



export default function People({name}) {
    const [open, setOpen] = useState(false)
    
  
    return (
       <Card>
           <Card.Body>
             <div className= 'd-flex justify-content-between'>
                <div>
                    <Card.Title>
                        {name.name.first}<span> </span>{name.name.last}
                        
                    </Card.Title>
                    <Card.Subtitle>
                      <Badge variant='secondary' className='mb-4'> Employee Number: {name.id.value}

                      </Badge>
                       
                    </Card.Subtitle>
                    <Card.Text>
                        <Button onClick= {() => setOpen(prevOpen => !prevOpen)}variant= 'primary'>View Details</Button>
                    </Card.Text>
                    <Collapse in={open}>
                        <div className= 'mt-4'>
                             <img src= {name.picture.medium}/> 
                             <h6 className= 'mt-4'>DOB : {new Date(name.dob.date).toLocaleDateString()}</h6>
                             <h6>Email : <a href={`mailto:${name.email}`}>{name.email}</a></h6> 
                             <h6>Phone : {name.cell}</h6>
                             <h6>Location : {name.location.city}, {name.location.state}</h6>
                        </div>
                    </Collapse>
                  </div>  
                   <img height= '70' src= {images}/>                   
             </div>  
           </Card.Body>
        </Card> 
    )
}
