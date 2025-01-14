import Home from './pages/home/Home'
import Users from './pages/users/Users'
import NewUser from './pages/newUser/NewUser'
import Products from './pages/products/Products'
import NewProducts from './pages/newProducts/NewProducts'

let routes = [
    { path: '/', element: <Home /> },
    { path: '/users', element: <Users /> },
    { path: '/newUser', element: <NewUser /> },
    { path: '/products', element: <Products /> },
    { path: '/newProduct', element: <NewProducts /> },
]

export default routes
