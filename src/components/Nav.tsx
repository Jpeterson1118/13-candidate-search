import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const location = useLocation().pathname;
  return (
      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/' className={location === '/' ? 'nav-link-active' : 'nav-link'}>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='SavedCandidates' className={location === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}>Potential Candidates</Link>
        </li>
      </ul>
  )
};

export default Nav;
