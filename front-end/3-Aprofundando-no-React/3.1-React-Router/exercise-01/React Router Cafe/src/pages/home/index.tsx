import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link to='/cofees'>
        <button>Conheça nossos produtos</button>
      </Link>
    </>
  )
}
  
export default Home;