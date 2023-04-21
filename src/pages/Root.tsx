import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink, Outlet } from "react-router-dom";

export function Root() {
    return <Box
        display='flex'
        flexDirection='column'
    >
        <Box
            display="flex"
            gap={2}
            padding={2}
        >
            <Button
                variant="text"
                to='/'
                component={NavLink}
            >
                Home
            </Button>
            <Button
                variant="outlined"
                to='/startTransition'
                component={NavLink}
            >
                Start Transition example
            </Button>
            <Button
                variant="outlined"
                to='/deferredValue'
                component={NavLink}
            >
                Deferred value example
            </Button>
            <Button
                variant="outlined"
                to='/suspenseExample'
                component={NavLink}
            >
                Suspense
            </Button>
            <Button
                variant="outlined"
                to='/crappy'
                component={NavLink}
            >
                Crappy
            </Button>
        </Box>

        <Box padding={2}>
            <Outlet />
        </Box>
    </Box>
}
