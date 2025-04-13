import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const location = useLocation().pathname;
  return (
    <div>
      <ul>
        <li>
          <Link to='/' className={location === '/' ? 'nav-link-active' : 'nav-link'}>Home</Link>
        </li>
        <li>
          <Link to='SavedCandidates' className={location === 'SavedCandidates' ? 'nav-link-active' : 'nav-link'}>Potential Candidates</Link>
        </li>
      </ul>
    </div>
  )
};

export default Nav;
