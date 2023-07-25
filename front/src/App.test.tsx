import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/Github Search/i);
  expect(title).toBeInTheDocument();
});

test('the search bar is present', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/search input/i);
  expect(searchInput).toBeInTheDocument();
});

test('no result by default', () => {
  render(<App />);
  const noResultText = screen.getByText(/no result/i);
  expect(noResultText).toBeInTheDocument();
});

test('search a user and check its checkbox', () => {
  const { container } = render(<App />);
  const searchInput = screen.getByPlaceholderText(/search input/i);
  
  fireEvent.change(searchInput, { target: {value: "ThibLeger"} });

  // wait for debounce and api
  setTimeout(() => {
    const userId = screen.getByText(/14903853/i);
    expect(userId).toBeInTheDocument();

    const userCheckbox = container.getElementsByClassName("userCardCheckbox")[0];
    expect(userCheckbox).toBeInTheDocument();

    fireEvent.click(userCheckbox);
    const nbOfElements = screen.getByText(/1 element selected/i);
    expect(nbOfElements).toBeInTheDocument();
  }, 1000);
});