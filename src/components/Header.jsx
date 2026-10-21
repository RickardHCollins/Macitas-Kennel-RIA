import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to="/" className="logo">MACITA'S KENNEL</Link>
      <nav>
        <ul>
          <li><Link to="/">HEM</Link></li>
          <li><Link to="/hundar">HUNDAR</Link></li>
          <li><Link to="/galleri">GALLERI</Link></li>
          <li><Link to="/omoss">OM OSS</Link></li>
          <li><Link to="/kontakt">KONTAKT</Link></li>
        </ul>
      </nav>
    </header>
  );
}