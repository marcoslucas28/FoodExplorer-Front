import { Route, Routes } from 'react-router-dom'

import { SingIn } from '../pages/SingIn'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SingIn />} />
        </Routes>
    )
}