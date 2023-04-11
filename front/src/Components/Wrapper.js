import { Link, Outlet } from 'react-router-dom';
import './Wrapper.css';

export default function Wrapper() {
  return (
    <>
      <header>
      <link rel="stylesheet" href="./Wrapper.css" />
        <div className="linkContainer">
          <div className="aLink">
            <Link to="/stores">View All Stores</Link>
          </div>
          <div className="aLink">
            <Link to="/stores/new">Add New Store</Link>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}
