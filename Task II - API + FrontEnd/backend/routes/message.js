// imorting express , and intialising router in the path
const router = require('express').Router();
const Message = require('../models/Message');

// Checking main route
router.get('/',(req,res)=>{
	res.send("The api works fine");
})

router.post('/', async (req,res)=>{
	try{
		const message = await new Message({...req.body});
		await message.save();
		res.status(200).json(message)
	}catch(err){
		console.log(err);
		res.status(404).json('Something Went Wrong')
	}
})

// Getting all the messages
router.get('/all', async(req,res) => {
	try{
		const messages = await Message.find({}).sort({createdAt:-1});
		res.status(200).json(messages)
	}catch(e){
		return res.status(500).json(e)
	}
})


router.put('/:id', async (req,res)=>{
	try{
		const message = await Message.findByIdAndUpdate(req.params.id,{
			$set:req.body,
		});
		res.status(200).json(message)
	}catch(err){
		console.log(err);
		res.status(404).json('Something Went Wrong with Update')
	}
})

router.delete('/:id', async (req,res)=>{
	try{
		const message = await Message.findByIdAndDelete(req.params.id);
		res.status(200).json("The Message has been deleated")
	}catch(err){
		console.log(err);
		res.status(404).json('Something Went Wrong with Delete')
	}
})

// export roouter so it can be used by index.js , where it is imported
module.exports = router