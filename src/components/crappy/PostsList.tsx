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

export const PostsList = ({
    search,
}: CategoryItemProps) => {
    const { data, isLoading } = useFetchData(
        `https://dummyjson.com/posts/search?q=${search}`,
        `posts-search-${search}`
    );

    return isLoading
        ? <CircularProgress/>
        : <List>
            <h2>Posts</h2>
        {data.posts.map((post: any) => <StyledListItem>
            <ListItemText primary={post.title} />
        </StyledListItem>)}
        </List>
}