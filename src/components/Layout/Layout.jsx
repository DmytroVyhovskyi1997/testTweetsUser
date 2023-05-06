import { Navigation } from "components/Navigation.jsx/Navigation"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Layout = ()=>{
    return(
        <>
         <header>
            <Navigation/>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
        </>
       
    )
}