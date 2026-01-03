import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import InstructionsPage from './pages/InstructionsPage';
import ExamPage from './pages/ExamPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="exam/:id" element={<InstructionsPage />} />
          <Route path="exam/:id/start" element={<ExamPage />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
