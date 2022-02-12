import {React,useRef} from 'react'
import "./addmessage.css"
import axios from 'axios'

export default function AddMessage(props) {
	const messageToBePut = useRef('')
	const submitMessage = async (e) => {
		e.preventDefault();
		const message = {
			message:messageToBePut.current.value
		}
		try{
			const res = await axios.post('/api/messages',message)
		}catch(e){
			console.log(e);
			alert("message not Sent");
		}
	}
	return (
		<>
		<div className='col-xl-8 col-md-8 col-sm-12 align-middle'>
			<div class="input-group input-group-lg">
			  <span class="input-group-text" id="inputGroup-sizing-lg">Message</span>
			  <input type="text" class="form-control" ref={messageToBePut} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
			</div>		
		</div>
		<div className="col-xl-2 col-md-2 col-sm-4">
			<button className='btn btn-primary mt-1' onClick={submitMessage} > Add Message </button>
		</div>
		{/*<button className="btn-white" onClick={props.printe} >+</button>*/}
		</>
	)
}