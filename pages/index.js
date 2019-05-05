import Header from "./Header";
import Link from 'next/link';
import Router from 'next/router';

import '../styles/main.scss';
function Home() {
  return (
    <div>
      <Header />
      Welcome to Next.js!
      <br/>
      <Link href='/about'><a>Click here</a></Link>
      <br/>
      <span onClick={()=>Router.push('/about')}><a>Router push</a></span>
      <br/>
      <Link href={{ pathname: '/about', query: { name: 'herat' } }}><a>Click here</a></Link>
    </div>
  );
}

export default Home;