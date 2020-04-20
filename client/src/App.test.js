import React from 'react';
import ReactDOM from 'react-dom';
import {render} from "@testing-library/react";
import App from './App';
import NavBar from './NavBar';


test("Proper title rendering", () => {
  const {getByText} = render(<NavBar />);
  getByText(/Woman World Cup Players/i);
});

