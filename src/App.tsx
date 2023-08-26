import { useEffect, useMemo, useState } from 'react';
import './styles.css';

import { StyledDivider } from './App.style';
import { Product } from './types/Product';
import { List } from './components/List';
import { Search } from './components/Search';
import { Loading } from './components/Loading';

/*
  e2e tests
  responsive styling: CHECK
  cleanup: CHECK
*/

export default function App() {
  const [listItems, setListItems] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchListItems = async () => {
      setLoading(true);
      await fetch('https://fakestoreapi.com/products')
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json() as Promise<Product[]>;
        })
        .then((data) => {
          setListItems(data);
          setLoading(false);
        })
        .catch((error) => {
          alert('there was an error retrieving products');
          console.error('error', error);
          setLoading(false);
        });
    };
    fetchListItems();
  }, []);

  const filteredList = useMemo(() => {
    return listItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
    );
  }, [listItems, searchQuery]);

  return (
    <div className='App'>
      <h1>Apple List Items</h1>
      {loading ? (
        <Loading label={'Loading Products...'} />
      ) : (
        <>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <StyledDivider />
          <List listItems={filteredList} />
        </>
      )}
    </div>
  );
}
