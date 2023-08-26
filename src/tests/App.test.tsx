import { render, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import { productFetchMock } from './App.mocks';

describe('App Component', () => {
  let fetchMock: any = undefined;
  let empty: boolean = false;

  beforeEach(() => {
    fetchMock = jest
      .spyOn(global, 'fetch')
      .mockImplementation(() => productFetchMock(empty));
  });

  afterEach(() => {
    empty = false;
    jest.restoreAllMocks();
  });

  test('renders the main page', () => {
    const { getByText } = render(<App />);
    expect(getByText('Apple List Items')).toBeInTheDocument();
  });

  test('renders the loading products text before returning results', () => {
    const { getByText } = render(<App />);
    expect(getByText('Loading Products...')).toBeInTheDocument();
  });

  test('renders products after loading', async () => {
    const { getAllByRole, queryByText } = render(<App />);
    await waitForElementToBeRemoved(() => queryByText('Loading Products...'));
    const products = getAllByRole('img');
    expect(products).toHaveLength(3);
  });

  test('renders no products available if no products returned', async () => {
    empty = true;
    const { queryAllByRole, queryByText } = render(<App />);
    await waitForElementToBeRemoved(() => queryByText('Loading Products...'));
    const products = queryAllByRole('img');
    expect(products).toHaveLength(0);
  });

  describe('search input', () => {
    test('is visible', async () => {
      const { getByRole, queryByText } = render(<App />);
      await waitForElementToBeRemoved(() => queryByText('Loading Products...'));
      const searchInput = getByRole('textbox', { name: 'Search' });

      expect(searchInput).toBeInTheDocument();
    });

    test('filters products when a search query is given checking title and description', async () => {
      const { getByRole, getAllByRole, queryByText } = render(<App />);
      await waitForElementToBeRemoved(() => queryByText('Loading Products...'));
      const searchInput = getByRole('textbox', { name: 'Search' });

      await userEvent.type(searchInput, 'Spring');
      expect(searchInput).toHaveValue('spring');

      const products = getAllByRole('img');
      expect(products).toHaveLength(2);
    });

    test('goes back to showing all products if search is cleared', async () => {
      const { getByRole, getAllByRole, queryByText } = render(<App />);
      await waitForElementToBeRemoved(() => queryByText('Loading Products...'));
      const searchInput = getByRole('textbox', { name: 'Search' });

      await userEvent.type(searchInput, 'Spring');
      expect(searchInput).toHaveValue('spring');

      const productsBefore = getAllByRole('img');
      expect(productsBefore).toHaveLength(2);

      await userEvent.clear(searchInput);
      expect(searchInput).toHaveValue('');

      const productsAfter = getAllByRole('img');
      expect(productsAfter).toHaveLength(3);
    });
  });
});
