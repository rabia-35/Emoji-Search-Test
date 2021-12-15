import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import App from '../App'

test('sayfa ilk yüklendiğinde list de emojiler görünmeli', () => {
    render(<App />)
    const listEl=screen.getAllByText("Click to copy emoji")
    expect(listEl.length).toEqual(20)
})
