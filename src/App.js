import React, { useState, useEffect } from 'react'
import './App.css';
import API from './utils/API'
import { Container } from 'react-bootstrap';
import People from './components/People/People';
import SearchForm from './components/Search/SearchForm';
import Header from './components/Header/Header';


function App() {

  const [params, setParams] = useState({})  
  const [loading, setLoading] = useState('')
  const [employee, setEmployee] = useState([])
  const [search, setSearch] = useState('')
  const [filteredEmployee, setFilteredEmployee] = useState([])
  

  const handleChange = e  => {
      setSearch(
        e.target.value
)}

  useEffect(() => {
    setLoading(true);
    API.getUsers()
    .then(res => {
     setEmployee(res.data.results)
    setLoading(false)
  
}).catch(err => {
  console.log(err)
})
}, [])  


  useEffect(() => {
    setFilteredEmployee(
      employee.filter (name => {
        return name.name.first.toLowerCase().includes(search.toLowerCase()) ||name.location.state.toLowerCase().includes(search.toLocaleLowerCase())
      })
    )
  }, [search, employee])


  return (

    <Container className= 'my-1'>
      <Header/>
      <SearchForm params={params} onParamChange={handleChange}/>
       {loading && <h1>Loading...</h1>} 
      {filteredEmployee.map(name => {
        return <People key={name.id.value} name={name} />
      })}
    </Container>
  );
}

export default App;
