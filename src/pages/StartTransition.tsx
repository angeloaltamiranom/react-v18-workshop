import { startTransition, useState, useTransition } from "react";
import { UserListCreator } from "../components/UserListCreator"
import { UserItem } from "../components/UserList";
import styled from "@emotion/styled";
import { generateUsers } from "../util/generateUsers";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
`;

export const StartTransition = () => {
    const [ users, setUsers ] = useState<UserItem[]>([]);
    const [ usersWithoutTransition, setUsersWithoutTransition ] = useState<UserItem[]>([]);
    const [ _, startTransition ] = useTransition();
    
    const handleChangeWithTransition = (ev: React.ChangeEvent<HTMLInputElement>) => {
        startTransition(() => {
            const generatedUsers = generateUsers(ev.target.value);
            setUsers(generatedUsers);
        });
    }

    const handleChangeWithoutTransition = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const generatedUsers = generateUsers(ev.target.value);
        setUsersWithoutTransition(generatedUsers);
    }

    return <StyledContainer>
        <UserListCreator
            title={"Without startTransition"}
            handleChange={handleChangeWithoutTransition}
            users={usersWithoutTransition}
        />
        <UserListCreator
            title={"With startTransition"}
            handleChange={handleChangeWithTransition}
            users={users}
        />
    </StyledContainer>
}