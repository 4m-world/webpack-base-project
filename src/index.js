import App from './app/App';
import './styles/index.scss';

const message = document.createElement('h1');
message.textContent = App();

const app = document.getElementById('root');
app.append(message);
