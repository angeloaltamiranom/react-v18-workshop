import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import Person3Icon from '@mui/icons-material/Person3';
export interface UserItem {
    id: string;
    name: string;
}

interface UserListProps {
    users: UserItem[];
}
const RandomPersonIcon = () => {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:    
            return <PersonIcon />;
        case 1:
            return <Person2Icon />;
        case 2:
            return <Person3Icon />;
        default:
            return <PersonIcon />;
    }
};

export const UserList = ({
    users,
}: UserListProps) => {

    return <List>
        {users.map((user) => (
        <ListItem key={user.id}>
            <ListItemIcon>
                <RandomPersonIcon />    
            </ListItemIcon>
            <ListItemText primary={user.name} />
        </ListItem>
        ))}
    </List>
};
