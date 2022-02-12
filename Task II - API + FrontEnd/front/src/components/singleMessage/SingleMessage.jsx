import {React,useRef,useState,useEffect} from 'react'
import axios from 'axios';


export default function SingleMessage({message}) {

	const [newEditedMessage,setNewEditedMessage] = useState('')
	// Edit message method
	const editMessage = async (e) => {
		e.preventDefault();
		const newmessage = {
			message:newEditedMessage
		}
		try{
			// console.log(newEditedMessage)
			const res = await axios.put('/api/messages/'+message._id,newmessage)
			await alert("message Updated");


				// mousedown
		}catch(e){
			console.log(e);
			alert("message not Updated");
		}

	}

	// delete comment methdd
	const deleteMessage = async (e) => {
		e.preventDefault();
		try{
			// console.log(newEditedMessage)
			const res = await axios.delete('/api/messages/'+message._id)
			await alert("message Deleted");


				// mousedown
		}catch(e){
			console.log(e);
			alert("message not Deleted");
		}

	}


useEffect(() => {
	setNewEditedMessage(message.message)
}, [])


	return (
		<>
		<div className='col-xl-8 col-md-10 col-sm-12 text-white border border-2 border-primary my-2'>
			{message.message}
		</div>
		<div className="col-xl-2 col-md-2 col-sm-4 text-center my-2">
			<button className="btn-warning" data-bs-toggle="modal" data-bs-target={`#edit${message._id}`}>Edit</button>
			<button className="btn-danger mx-2" onClick={deleteMessage} >Delete</button>
		</div>

	{/*The Modal To Edit the Message*/}
		<div className="modal fade" id={`edit${message._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div className="modal-dialog bg-warning border border-4 border-white">
		    <div className="modal-content bg-warning">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">Edit Message</h5>
		        <button type="button" className="btn-close btn-danger text-white" id='edited' onClick={()=> console.log("sdfuh") } data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      <div className="modal-body">
		      <label>Type New Message</label>
		      	<input type="text" value={newEditedMessage} onChange={(e)=>setNewEditedMessage(e.target.value)} />
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-success "  onClick={editMessage} >Save changes</button>
		      </div>
		    </div>
		  </div>
		</div>

		</>
	)
}