import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import React from 'react';
import Loading from "../../../components/Loading";

describe('Loading', () => {
    it('should render', () => {
        render(<Loading />)
        expect(screen.getByText('Loading')).toBeInTheDocument()
    })
})