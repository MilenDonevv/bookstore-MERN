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
<div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/library.jpg')" }}>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
  <div className="relative bg-transparent bg-opacity-80 p-4 rounded-lg shadow-lg">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  </div>
</div>
  )
}

export default App