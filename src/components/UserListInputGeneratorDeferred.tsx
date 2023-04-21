import { useDeferredValue, useMemo } from "react";
import { generateUsers } from "../util/generateUsers";
import { UserList } from "./UserList";

interface UserListGeneratorProps {
    input: string;
};

export const UserListInputGeneratorDeferred = ({
    input,
}: UserListGeneratorProps) => {
    const deferredInput = useDeferredValue(input);
    const users = useMemo(() => {
        return generateUsers(deferredInput);
    }, [ deferredInput ]);

    console.log('deferredInput', deferredInput);
    console.log('input', input)
    return (
        <UserList users={users}/>
    );
}