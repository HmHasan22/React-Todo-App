import './App.css';
import Button from './components/button/Button';
import Input from './components/input/Input';
import "./index.css"
function App() {
  const handleChange = (value) => {
    console.log(value);
  }
  return (
    <div className="App">
      <div className='flex items-center justify-center min-h-screen'>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={(e) => handleChange(e.target.value)} />
          </div>
          <Button text={`Submit`} />
        </form>
      </div>
    </div>
  );
}

export default App;