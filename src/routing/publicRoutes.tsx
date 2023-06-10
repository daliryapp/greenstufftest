import {Route, Routes} from "react-router";
import MainPage from 'pages/MainPage';


export const publicRoutes = [
    {
        path: "/",
        component: MainPage,
    },

];
export const PublicRoutes = () => (
    <Routes>
        {publicRoutes.map(({path, component: Component}, i) => {
            return (
                <Route key={i} path={path} element={<Component/>}/>
            );
        })}
    </Routes>
);
