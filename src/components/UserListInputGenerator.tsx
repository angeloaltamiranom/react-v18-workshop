import styled from "@emotion/styled";
import { UserItem, UserList } from "./UserList";
import { Input } from "@mui/material";
import { useDeferredValue, useMemo, useState } from "react";
import { generateUsers } from "../util/generateUsers";

interface UserListGeneratorProps {
    input: string;
};

export const UserListInputGenerator = ({
    input,
}: UserListGeneratorProps) => {
    const users = useMemo(() => {
        return generateUsers(input);
    }, [ input ]);

    return (
        <UserList users={users}/>
    );
}