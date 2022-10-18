import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import ProductList from './Components/ProductItem/ProductList';
import Recommendation from './Components/Recommendation/Recommendation';

function App() {
  return (
    <div>
      <Navigation/>
      <Header />
      <Recommendation />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
