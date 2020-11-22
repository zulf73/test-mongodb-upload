import logo from './logo.svg';
import './App.css';

function App() {
  return (
	  <div>
	  <form action="/upload" method="post">
	     <input type="file" name="fileUpload" />
	  </form>
	  </div>
  );
}

export default App;
