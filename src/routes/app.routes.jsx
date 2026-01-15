import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Details } from '../pages/Details'
import { Payment } from '../pages/Payment'
import { OrderHistory } from '../pages/OrderHistory'
import { Favorites } from '../pages/Favorites'

import { useAuth } from '../hooks/auth'

export function AppRoutes(){
    const { user } = useAuth()

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/orders' element={<OrderHistory />} />

            {!user.isAdmin && (<Route path='/myOrder' element={<Payment />} />)}
            {!user.isAdmin && (<Route path='/favorites' element={<Favorites />} />)}
            
            {user.isAdmin == true && (<Route path='/newDish' element={<NewDish />} />)}
            {user.isAdmin == true && (<Route path='/editDish/:id' element={<EditDish />} />)}
        </Routes>
    )
}