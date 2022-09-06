import React from 'react';
import ReactDOM from 'react-dom/client';
import Timer from './Timer';
import reportWebVitals from './reportWebVitals';
import './assets/css/reset.css';
import GlobalStyle from './GlobalStyle';
import { ParticipantsProvider } from './state/useParticipants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParticipantsProvider>
      <GlobalStyle />
      <Timer />
    </ParticipantsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
