import { styled } from "@mui/system";

export const ItemContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 220px;
`;

export const ItemTitle = styled("div")`
  font-weight: bold;
  white-space: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ItemDescription = styled("div")`
  white-space: wrap;
`;

export const StyledImage = styled("img")`
  max-width: 200px;
  height: auto;
  object-fit: contain;
  align-self: center;
`;
