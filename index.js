import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import Comp_parent from './App';
import Cls1 from './SchedulingAssistant';

ReactDOM.render(<Cls1 />, document.getElementById('root'));
registerServiceWorker();
