import { TextField } from "@mui/material";
import { useState } from "react";
import { ProductList } from "../components/crappy/ProductList";
import { PostsList } from "../components/crappy/PostsList";
import styled from "@emotion/styled";
import { UsersList } from "../components/crappy/UsersList";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
`;

export const Crappy = () => {
    const [ search, setSearch ] = useState("");

    return (
        <div>
        <h1>Crappy lists</h1>
        <TextField onChange={(event) => setSearch(event.currentTarget.value)} label='Search' />
        <StyledContainer>
            <ProductList search={search}/>
            <PostsList search={search}/>
            <UsersList search={search}/>
        </StyledContainer>
        </div>
    );
};