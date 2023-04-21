import styled from "@emotion/styled";
import { UserItem, UserList } from "./UserList";
import { Input } from "@mui/material";

interface StartTransitionExampleProps {
    handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    users: UserItem[];
    title?: string;
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

export const UserListCreator = ({
    handleChange,
    users,
    title
}: StartTransitionExampleProps) => {
    return (
    <StyledContainer>
        {title && <h3>{title}</h3>}
        <Input
        type="text"
        onChange={handleChange}
        placeholder="Insert your name..."
        />
        <UserList users={users}/>
    </StyledContainer>
    );
}