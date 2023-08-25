import { Product } from "../../types/Product";
import {
  ItemContainer,
  ItemDescription,
  ItemTitle,
  StyledImage
} from "./ListItem.style";

interface Props {
  item: Product;
}

export const ListItem = ({ item }: Props) => {
  return (
    <ItemContainer>
      <StyledImage src={item.image} alt={item.title} loading="lazy" />
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDescription>{item.description}</ItemDescription>
    </ItemContainer>
  );
};

// export const ListItem = ({ item }: Props) => {
//   return (
//     <ImageListItem sx={{ border: 1 }}>
//       <div style={{display: 'block'}}>
//       <StyledImage src={item.image} alt={item.title} loading="lazy" />
//       <ImageListItemBar
//         title={<ItemTitle>{item.title}</ItemTitle>}
//         subtitle={<ItemDescription>{item.description}</ItemDescription>}
//         position="below"
//       />
//       </div>
//     </ImageListItem>
//   );
// };
