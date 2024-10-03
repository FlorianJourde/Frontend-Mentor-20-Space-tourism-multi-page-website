import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import withComponentClass from './utils/withComponentClass';
import withAllComponents from './utils/withAllComponents';

// const WithComponentClassApp = withComponentClass(App);
const EnhancedApp = withAllComponents(App);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <WithComponentClassApp /> */}
    {/* <EnhancedApp /> */}
  </React.StrictMode>,
)
