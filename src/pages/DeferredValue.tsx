import { startTransition, useState } from "react";
import { UserListCreator } from "../components/UserListCreator"
import { UserItem } from "../components/UserList";
import styled from "@emotion/styled";
import { UserListCreatorDeferred } from "../components/UserListCreatorDeferred";
import { UserListGenerator } from "../components/UserListGenerator";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
`;

export const DeferredValue = () => {
    return <StyledContainer>
        <UserListGenerator
            title="Without deferred value"
            isDeferred={false}
        />
        <UserListGenerator
            title="With deferred value"
            isDeferred
        />
    </StyledContainer>
}