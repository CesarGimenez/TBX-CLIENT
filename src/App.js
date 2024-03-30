import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableFile from './components/Tables/TableFile';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  return (
    <div className="App">
      <div className='pt-2 pb-2 m-3 text-white' style={{backgroundColor: '#FF2252' }}>
        <h5 className='px-1'>React Test App</h5>
      </div>
      <SearchInput/>
      <TableFile/>
    </div>
  );
}

export default App;
