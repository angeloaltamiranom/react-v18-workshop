import { CircularProgress, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import styled from "@emotion/styled";
import { useFetchData } from "../../hooks/useFetchData";

interface CategoryItemProps {
    search: string;
}

const StyledListItem = styled(ListItem)`
    display: flex;
    flex-direction: row;
    gap: 50px;
    padding: 20px;
`;

export const UsersList = ({
    search,
}: CategoryItemProps) => {
    const { data, isLoading } = useFetchData(
        `https://dummyjson.com/users/search?q=${search}`,
        `users-search-${search}`
    );

    return isLoading
        ? <CircularProgress/>
        : <List>
            <h2>Users</h2>
        {data.users.map((user: any) => <StyledListItem>
            <ListItemText primary={`${user.firstName} ${user.lastName}`} />
        </StyledListItem>)}
        </List>
}