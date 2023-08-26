import { Product } from '../../types/Product';
import { ListItem } from './ListItem';
import { ListContainer } from './List.style';

interface Props {
  listItems: Product[];
}

export const List = ({ listItems }: Props) => {
  const ListItems = listItems.map((item) => (
    <ListItem key={item.id} item={item} />
  ));
  return (
    <ListContainer>
      {listItems.length ? ListItems : 'No Items Available'}
    </ListContainer>
  );
};
