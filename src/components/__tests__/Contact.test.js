import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('It will test contact component', () => {
  it('Check weather contact component has heading', () => {
    render(<Contact/>);
    const heading = screen.getByRole('heading');
    // Assertion 
    expect(heading).toBeInTheDocument();
  });
  
  it('Check weather contact component has button', () => {
    render(<Contact/>);
    const button = screen.getByRole('button');
    // Assertion 
    expect(button).toBeInTheDocument();
  });
  
  it('Check weather contact component has two input tags', () => {
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole('textbox');
    // Assertion 
    expect(inputBoxes.length).toBe(2);
  });
})
