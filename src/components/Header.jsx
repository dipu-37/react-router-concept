import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <nav>
            <span>my website</span>
            <br />
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/about">About</Link>
            <Link to="/contuct">Contuct us</Link>
            <Link to="/posts">posts</Link>
           
            
            </nav>
        </div>
    );
};

export default Header;