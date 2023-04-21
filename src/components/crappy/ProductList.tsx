import { CircularProgress, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import styled from "@emotion/styled";
import { useFetchData } from "../../hooks/useFetchData";
import { useDeferredValue } from "react";

interface CategoryItemProps {
    search: string;
}

const StyledListItem = styled(ListItem)`
    display: flex;
    flex-direction: row;
    gap: 50px;
    padding: 20px;
`;


export const ProductList = ({
    search,
}: CategoryItemProps) => {
    const { data, isLoading } = useFetchData(
        `https://dummyjson.com/products/search?q=${search}`,
        `products-search-${search}`
    );

    return isLoading
        ? <CircularProgress/>
        : <List>
            <h2>Products</h2>
            {data.products.map((product: any) => <StyledListItem>
                <ListItemIcon>
                    <img src={product.thumbnail} alt={product.name} height={50}  />
                </ListItemIcon>
                <ListItemText primary={product.title} />
            </StyledListItem>)}
        </List>;
}