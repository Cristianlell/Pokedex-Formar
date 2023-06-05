import ReactDOM from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import { GlobalStyle } from './style';
import { Normalize } from 'styled-normalize'
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <GlobalStyle />
        <Normalize/>
        <App/>
    </>
)
