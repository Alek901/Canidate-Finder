import { link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <link to="/" className='text-white text-x1 font bold'>
        Candidate Finder
        </link>
        
      </div>
    </nav>
    <div>Nav</div>
  )
};
// TODO: Add necessary code to display the navigation bar and link between the pages
export default Nav;
