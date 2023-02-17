import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"

const Router = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    })
    
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/:filter?" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default Router
