import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundpage = () => {
  return (
    <section class="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className='text-red-500 text-6xl mb-4' />
        <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
        <p class="text-xl mb-5">This page does not exist</p>
        <Link
            to="/"
            class="text-white bg-main_orange hover:bg-hover_orange px-4 py-2 mt-4"
            >Go Back</Link
        >
    </section>
  )
}

export default NotFoundpage