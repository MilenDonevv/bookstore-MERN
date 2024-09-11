import { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'



const DeleteBook = () => {
  // const url = "http://localhost:5555";
  const url = "https://bookstore-mern-ywb2.onrender.com";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar(); // destructure enqueueSnackbar from useSnackbar


  const handleDeleteBook = () => {
    setLoading(true);

    axios
      .delete(url + `/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully!', { variant: 'success' })
        navigate('/');
      })
      .catch((error) => {
        setLoading(false)
        // alert('An error occurred! Please Check Console!')
        enqueueSnackbar('Error', {variant: 'error'})
        console.log(error.message);
      });
  } 


  return (
    <div className='p-4'>
      <BackButton />
      {
        loading ? <Spinner /> : ''
      }
      <div className='flex flex-col items-center border-2 w-[600px] p-8 mx-auto  border-sky-400 rounded-xl  bg-white bg-opacity-90 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
      <h1 className='text-3xl my-4 '>Delete Book</h1>
        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
            Yes, Delete it!
        </button>
      </div>
    </div>
  )
}

export default DeleteBook