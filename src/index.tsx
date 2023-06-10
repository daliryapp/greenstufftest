import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import {store} from "@core/redux/store";
import setupAxios from "./@core/configs/setupAxios";
import axios from "./@core/client/http";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
setupAxios(axios, store);
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename="/">
                <QueryClientProvider client={queryClient}>
                    <App/>
                </QueryClientProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app.ts, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
