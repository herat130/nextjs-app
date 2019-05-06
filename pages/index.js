import Header from "./Header";
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../components/Layout';
// import { Link as RouterLink, Route, Switch, BrowserRouter } from 'react-router-dom';
// import Contact from '../pages/Contact';

import '../styles/main.scss';
function Home() {
  return (
    <div>
      <Layout>
        Welcome to Next.js!
      <br />
        <Link href='/about'><a>Click here</a></Link>
        <br />
        <span onClick={() => Router.push('/about')}><a>Router push</a></span>
        <br />
        <Link href={{ pathname: '/about', query: { name: 'herat' } }}><a>Click here</a></Link>
        <br />
        {/* <RouterLink to='/contact'>About</RouterLink>
        <Switch>
          <Route path={'/contact'} component={Contact} ></Route>
        </Switch> */}
      </Layout>
    </div>
  );
}

export default Home;