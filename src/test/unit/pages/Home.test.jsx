import "@testing-library/jest-dom/extend-expect";
import { act, render, screen } from "@testing-library/react";
import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { wait } from "../../../helpers/wait";
import Home from '../../../pages/Home';

// function wait(time) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, time);
//     });
// }

describe('Home', () => {
    beforeEach(() => {
        const queryClient = new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                }
            }
        })

        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </QueryClientProvider>
        )
    })

    it('should render loading', async () => {
        expect(screen.getByText('Loading')).toBeInTheDocument()
    })

    it('should render', async () => {
        await act(async () => {
            await wait(1000);
        });
          
        expect(screen.getByText('Viio Market')).toBeInTheDocument()
    })

    it('should render filters', async () => {
        await act(async () => {
            await wait(1000);
        });
          
        expect(screen.getByText('smartphones')).toBeInTheDocument()
        expect(screen.getByText('laptops')).toBeInTheDocument()
    })
})