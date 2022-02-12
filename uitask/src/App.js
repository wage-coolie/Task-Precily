import SplitPane from 'react-split-pane'
import './App.css';

function App() {
  return (
    <>
    <div className="App main border border-dark border-5">
  

          <SplitPane split="horizontal">
                <SplitPane split="vertical"  minSize="50px"  className='border border-primary border-5 '>
                  <div minSize="5%" className='border border-danger border-5 panell1' >This is a Pane 1</div>
                  <div minSize="5%"  className='border border-danger border-5 panell1'>This is a Pane 2</div>
                </SplitPane> 
            <div minSize="50px"  className='border border-primary border-5 box-3'>This is Pane 3</div>
          </SplitPane>



</div>
    </>
  );
}

export default App;
