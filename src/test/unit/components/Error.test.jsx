import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from 'react';
import Error from "../../../components/Error";

describe('Error', () => {
    it('should render', () => {
        render(<Error />)
        expect(screen.getByText('Error, please reload the page.')).toBeInTheDocument()
    })
})