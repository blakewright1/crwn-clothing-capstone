import './categories.styles.scss'
import Categories from './components/categories/categories.component'

const categories = [
  {
    id: 1,
    title: 'Hats',
    imageUrl: ''
  },
  {
    id: 2,
    title: 'Socks',
    imageUrl: ''
  }
]

function App() {
  return (
    <Categories categories={categories} />
  );
}

export default App;
