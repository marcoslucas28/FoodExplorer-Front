import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'

import { useAuth } from '../hooks/auth'

export function AppRoutes(){
    const { user } = useAuth()

    return(
        <Routes>
            <Route path='/' element={<Home />} />
            
            {user.isAdmin == true && (<Route path='/newDish' element={<NewDish />} />)}
            {user.isAdmin == true && (<Route path='/editDish/:id' element={<EditDish />} />)}
        </Routes>
    )
}