import React from 'react';
import ReactDOM from 'react-dom/client';

// Draggable and Droppable App
// import App from './App/Draggable and Droppable App/App';

// Multiple Dropdown Box
// import App from './App/Multiple SelectBox/App';

// Emoji Picker and Search
// import  App from './App/EmojiPicker/App';

// Filter Search 
// import App from './App/FilterSearch/App';

// Dark and Light Mode
// import App from './App/Dark and Light Mode/App';

//color Generator
// import App from './App/Color-generator/App';

// Cocktalis app
// import App from './App/Cocktails/App';
// import { AppProvider } from './App/Cocktails/context'

// pagination app
// import App from './App/Pagination/App';

// slider app
// import App from './App/Slider/App';
// import App from './App/Slider/Alternative';

// Markdown-preview
// import App from './App/Markdown-preview/App';

// Random person show detail
// import App from './App/Random-person show detail/App';

//Accordion App
// import App from './App/Accordion/App';

// Tours
// import App from './App/Tours/App';

// Reviews App
// import App from './App/Reviews/App';

// Menu App
import App from './App/Menu/App';

// Tabs app
// import App from './App/Tabs/App'

// Css Link
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppProvider> */}
      <App />
    {/* </AppProvider> */}
  </React.StrictMode>
);