import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className='text-white text-x1 font bold'>
        Candidate Finder
        </Link>
        <div className='flex space-x-6'>
          <link to="/" className='text-white hover:text-gray-300'>
          Home
          </Link>
          <link to="/candidates" className='text-white hover:text-gray-300'>
          Candidates
          </Link>
          <Link to="/jobs" className='text-white hover:text-gray-300'>
          Jobs
          </Link>
          <Link to="/profile" className='text-white hover:text-gray-300'>
          Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};
// TODO: Add necessary code to display the navigation bar and link between the pages
export default Nav;
