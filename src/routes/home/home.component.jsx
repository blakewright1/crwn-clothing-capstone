import { Outlet } from 'react-router-dom';
import Categories from '../../components/categories/categories.component'

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

function Home() {
    return (
        <div>
            <Outlet />
            <Categories categories={categories} />
        </div>
    );
}

export default Home;
