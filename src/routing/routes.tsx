import Navbar from "components/navbar";
import {Stack} from "@mui/material";
import {PublicRoutes} from './publicRoutes';

const AppRoutes = () => {
    return (
        <>
            <Stack>
                <Navbar/>
                <PublicRoutes/>
            </Stack>
        </>
    );
};

export default AppRoutes;
