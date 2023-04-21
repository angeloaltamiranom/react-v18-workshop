import styled from "@emotion/styled";
import { Input } from "@mui/material";
import { useState } from "react";
import { UserListInputGenerator } from "./UserListInputGenerator";
import { UserListInputGeneratorDeferred } from "./UserListInputGeneratorDeferred";

interface UserListGeneratorProps {
    title?: string;
    isDeferred: boolean;
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`;

export const UserListGenerator = ({
    title,
    isDeferred,
}: UserListGeneratorProps) => {
    const [ input, setInput ] = useState<string>("");

    return (
    <StyledContainer>
        {title && <h3>{title}</h3>}
        <Input
            type="text"
            onChange={(ev) => setInput(ev.currentTarget.value)}
            placeholder="Insert your name..."
        />
        { isDeferred    
            ? <UserListInputGeneratorDeferred input={input}/>
            : <UserListInputGenerator input={input}/> }
    </StyledContainer>
    );
}