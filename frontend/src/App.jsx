// npm i react-router-dom --> 1) BrowserRouter for main.jsx   2) Routes and Route for App.jsx
// npm i axios react-icons  --> axios - sending HTTP requests   


import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';
import CreateBook from './pages/CreateBooks';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App