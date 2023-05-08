import { Navigation } from "components/Navigation.jsx/Navigation"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Layout.styled"

export const Layout = ()=>{
    return(
        <>
         <Header>
            <Navigation/>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
        </>
       
    )
}