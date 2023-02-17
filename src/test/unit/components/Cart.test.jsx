import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render, screen } from "@testing-library/react";
import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { wait } from "../../../helpers/wait";
import Home from "../../../pages/Home";

describe('Cart', () => {
    beforeEach(async () => {
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

        await act(async () => {
            await wait(1000);
        });

        fireEvent.click(screen.getAllByText('Add to basket')[0])
        fireEvent.click(screen.getAllByText('Add to basket')[1])

        fireEvent.click(screen.getByText('Your basket (2 items)'))
    })

    it('should render basket list', async () => {
        expect(screen.getByText('Your basket (2 items)')).toBeInTheDocument()
        expect(screen.getByText('iPhone 9')).toBeInTheDocument()
        expect(screen.getByText('iPhone X')).toBeInTheDocument()
    })

    it('should clear cart', async () => {
        await act(async () => {
            await wait(1000);
        });

        fireEvent.click(screen.getByText('Clear Cart'))
        expect(screen.getAllByText('iPhone 9', {exact: false})).toHaveLength(1)
        expect(screen.getAllByText('iPhone X', {exact: false})).toHaveLength(1)
        expect(screen.getByText('Your basket (0 items)')).toBeInTheDocument()
    })
})