import react from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link, Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Homepage } from './containers/Homepage';
import { Contact } from './containers/Homepage/Contact';
import { ErrorPage } from './containers/Error';

function App() {

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Homepage />}/>
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      <div className='maindiv'>
        <RouterProvider router={Router} />
      </div>
    </>
  )
}

const Root = () => { // THIS IS LIKE A PAGE!!!!
  return <>
    <div className='mt-3 ms-3 maindiv'>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>

    <Container>
      <Outlet />
    </Container>
  </>
}

export default App
