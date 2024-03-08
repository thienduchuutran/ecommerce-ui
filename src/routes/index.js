//LAyouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Testimonies from '~/pages/Testimonies';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/testimonies',
        component: Testimonies,
        layout: null,
    },
    {
        path: '/profile',
        component: Profile,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
