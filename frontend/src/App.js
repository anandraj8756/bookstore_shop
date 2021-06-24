import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen';


function App() {
  return (
    <Router>
      <Header />
       <main className='py-3'>
         <Container>
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen}  />
         </Container>
       </main>
       <Footer />
    </Router>
  );
}

export default App;
