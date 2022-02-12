
import {useState,useEffect} from 'react';
// importing my css for app
import './App.css';
// this will import the input for message
import AddMessage from './components/addMessage/AddMessage'
// importing axios for calls
import axios from 'axios';
// importing single messages to show
import SingleMessage from './components/singleMessage/SingleMessage' 

function App() {
  const [allMessages, setAllMessages] = useState([]);
  const [fetching, setFetching] = useState(true)
// get all the messages
  useEffect(() => {
    const fetchAllMessages = async () => {

      const res = await axios.get('/api/messages/all');
      setAllMessages(res.data);
      await setFetching(false)
    }
    fetchAllMessages();
  }, [allMessages,fetching])


 
  return (
    <>
    <div className="App bg-dark">
      <div className="container mx-auto border border-white border-3">
        <div className="row m-2">
          <AddMessage  />
        </div>
        <hr/>
        <div className="row m-2 text-center ">
          {fetching === true ? <h2 className='text-white mt-2 border border-2 border-warning'>
            Loading
          </h2>
          :
          <h2 className='text-white mt-2 border border-2 border-warning'>{allMessages.length} Messages</h2>
          }
        </div>
        <div className='row m2 text-center mx-auto justify-content-center'>
          {(allMessages.length === 0) ?
            <p>EMPTY</p> 
            :
            <>
            {allMessages.map((message)=>(
              <SingleMessage key={message._id} message={message}/>
              ))}


            </>  
            }
          
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
