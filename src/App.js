import './App.css';
import Calculator from './component/Calculator';
function App() {
  return (
    <>
      {/* basic logic is that firstly I have converted the input data into one standard unit ie : meter
      and then this meter unit would be converted to desired output unit  */}
      <div className="row d-flex">
        <div className="col-md-6 calculator">
           <Calculator/>
        </div>
        <div className="col-md-6">
              <img src="Calculator.png" alt="" className='homeImg'/>
        </div>
      </div>
    </>
  );
}

export default App;
