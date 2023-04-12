import { Link, Outlet } from 'react-router-dom';
import './Wrapper.css';

export default function Wrapper() {
  return (
    <>
      <header>
        <div class="navBar">
          <link rel="stylesheet" href="./Wrapper.css" />
          <div className="linkContainer">
            <Link to="/stores" className="buttonLink">
              <div className="button">View All Stores</div>
            </Link>
            <Link to="/stores/new" className="buttonLink">
              <div className="button">Add New Store</div>
            </Link>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}
