import {Outlet, Route, Routes} from "react-router-dom"
import { CustomerNav } from "../components/nav/CustomerNav"

export const CustomerViews = ({currentUser}) => {
    return (
        <Routes>
            <Route path="/" element={<>
            <Outlet/>
            <CustomerNav />
            </>}>
            <Route path="/" element={<>Hello!</>} />
            </Route>
        </Routes>
    )
}