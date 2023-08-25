import { Skeleton } from "@mui/material";

interface Props {
  label: string;
}

export const Loading = ({ label = "Loading..." }: Props) => {
  return (
    <>
      <div>{label}</div>
      <Skeleton animation={"wave"} variant="rounded" height={60} />
    </>
  );
};
