import { Grid2 as Grid, Typography, TypographyProps } from "@mui/material";
import { ElementType } from "react";
import Search from "../search/search";

interface TitleBarProps {
  title: string;
  search: boolean;
  onSearchChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  titleVariant?: TypographyProps["variant"];
  titleComponent?: ElementType;
  children?: React.ReactNode;
}

const TitleBar = ({
  title,
  search,
  onSearchChange,
  titleVariant = "h1",
  titleComponent = "h1",
  children,
}: TitleBarProps) => {
  return (
    <Grid
      container
      spacing={2}
      mt={4}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ marginBottom: "1rem" }}
    >
      <Typography variant={titleVariant} component={titleComponent} mb={2}>
        {title}
      </Typography>
      {children && children}
      {search && onSearchChange && <Search onSearchChange={onSearchChange} />}
    </Grid>
  );
};
export default TitleBar;
