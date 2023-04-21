import { CircularProgress, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useFetchData } from "../hooks/useFetchData"
import styled from "@emotion/styled";

interface CategoryItemProps {
    categoryName: string;
}

const StyledListItem = styled(ListItem)`
    display: flex;
    flex-direction: row;
    gap: 50px;
    padding: 20px;
`;

export const CategoryItem = ({
    categoryName,
}: CategoryItemProps) => {
    const { data, isLoading } = useFetchData(
        `https://dummyjson.com/products/category/${categoryName}`,
        categoryName
    );

    return isLoading
        ? <CircularProgress/>
        : <StyledListItem>
            <ListItemIcon>
                <img src={data.products[0].thumbnail} alt={categoryName} height={50}  />
            </ListItemIcon>
            <ListItemText primary={`${categoryName} in stock: ${data.total}`} />
        </StyledListItem>
}