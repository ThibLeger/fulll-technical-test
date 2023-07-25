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

test('search a user', () => {
  const { container } = render(<App />);
  const searchInput = screen.getByPlaceholderText(/search input/i);
  
  fireEvent.change(searchInput, { target: {value: "ThibLeger"} });

  // wait for debounce and api
  setTimeout(() => {
    const userId = screen.getByText(/14903853/i);
    expect(userId).toBeInTheDocument();
  }, 1000);
});

test('checks edit mode is off by default', () => {
  const { container } = render(<App />);
  const editModeContainer = container.getElementsByClassName("editModeContainer")[0];
  const editModeInput = editModeContainer.getElementsByTagName('input')[0];

  expect(editModeInput).not.toBeChecked();

  // checks action buttons are not reachable
  const actionBtnContainer = container.getElementsByClassName('actionBarIconContainer');
  expect(actionBtnContainer.length).toBeLessThanOrEqual(0);
});

test('checks action buttons are reachable in edit mode', () => {
  const { container } = render(<App />);
  const editModeContainer = container.getElementsByClassName("editModeContainer")[0];
  const editModeInput = editModeContainer.getElementsByTagName('input')[0];

  fireEvent.click(editModeInput);

  // checks action buttons are reachable
  const actionBtnContainer = container.getElementsByClassName('actionBarIconContainer');
  expect(actionBtnContainer.length).toBeGreaterThanOrEqual(1);
});