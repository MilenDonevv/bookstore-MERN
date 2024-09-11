import { useState } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const CreateBook = () => {

  // const url = "http://localhost:5555";
  const url = "https://bookstore-mern-ywb2.onrender.com";
  
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); // destructure enqueueSnackbar from useSnackbar

  const handleSaveBook = () => {

    const data = {
      title, 
      author,
      publishYear
    };

    setLoading(true);

    axios
      .post(url + '/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully!', { variant: 'success'});
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened! Please Check console!')
        enqueueSnackbar('Error', { variant: 'error'})
        console.log(error.message);
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      {
        loading ? <Spinner /> : ''  
      }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto  bg-white bg-opacity-90 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
      <h1 className='text-3xl my-4'>Create Book</h1>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input 
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input 
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input 
          type='text'
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
          />
          <button className='p-2 bg-sky-300 m-8' onClick={handleSaveBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateBook