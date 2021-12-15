import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import Header from '../Header';
test('Emoji Search yazısı document da olmalı', () => {
    render(<Header />)
    const Text=screen.getByText(/emoji search/i)
    expect(Text).toBeInTheDocument()
})
