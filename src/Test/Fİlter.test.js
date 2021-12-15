import { render, screen, } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import React from "react";
import App from '../App'
test('filter işlemi doğru çalışmalı', () => {
    render(<App />)
    const inputEl=screen.getByTestId("inputid")
    userEvent.type(inputEl,"Mask");
    const listEl=screen.getAllByText("Click to copy emoji");
    expect(listEl.length).toEqual(1)
    
})
