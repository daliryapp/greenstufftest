import ThemeProvider from "@core/theme";
import AppRoutes from "./routing/routes";
import AppModal from 'components/Modal';
import useModal from '_hooks/app/useModal';

function App() {
    const modalRef = useModal();
    return (
        <>
            <ThemeProvider>
                <AppModal ref={modalRef}/>
                <AppRoutes/>
            </ThemeProvider>
        </>
    );
}

export default App;