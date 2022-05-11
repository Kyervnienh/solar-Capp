import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero></Hero>
      <Footer />
    </div>
  );
}

export default App;
