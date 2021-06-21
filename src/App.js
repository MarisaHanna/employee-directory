import React, { useState } from 'react'
import './App.css';
import useFetchEmployee from './utils/fetchEmployee';
import { Container, Pagination } from 'react-bootstrap';
import People from './components/People/People';
import SearchForm from './components/Search/SearchForm';
import NewPage from './components/NewPage/NewPage';

function App() {

  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {employee, loading, error, nextPage } = useFetchEmployee(params, page)


const handleChange = e  => {
  const param = e.target.name
  const value = e.target.value
// setPage(1)
  setParams(prevParams => {
    return { ...prevParams, [param]: value }
  })
}

  return (

    <Container className= 'my-4'>
      <SearchForm params={params} onParamChange={handleChange}/>
      <NewPage page={page} setPage={setPage} nextPage={nextPage}/>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error... Try Refreshing Your Page</h1>}
      {employee.map(name => {
        return <People key={name.id.value} name={name}/>
      })}
       <NewPage page={page} setPage={setPage} nextPage={nextPage}/>
    </Container>
  );
}

export default App;
