export default function NavBar() {
  // this is our navigation page
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Main Page
      </a>
      <ul>
        <li className="active">
          <a href="/blog">Podcasts</a>
        </li>
        <li>
          <a href="/movieList">Movie List</a>
        </li>
      </ul>
    </nav>
  );
}
