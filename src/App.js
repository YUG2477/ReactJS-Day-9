import logo from './logo.svg';
import './App.css';

function App() {
  function handler() {
    console.log('clicked')
  }

  function handleonMouseover(){
 console.log('mouseover')


  }
  return (


    <div className="App">
    <img 
    src="https://picsum.photos/640/360" 
    onMouseOver={handleonMouseover} />
    <button onClick={handler}>Click me</button>
    </div>

    // <div>
    //         <button>Add Item</button>
    //         {thingsElements}
    //     </div>


  );
}

export default App;
