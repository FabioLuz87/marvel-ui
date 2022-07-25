import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Marvel from './pages/Marvel';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Marvel/>} />
            </Routes>
        </BrowserRouter>
    );
}