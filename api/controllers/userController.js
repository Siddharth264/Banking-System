const User = require("../models/userModel");
const Transaction = require("../models/transactionModel");
const customErrorHandler = require('../middlewares/customErrorHandler')
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    if(!users) return next(customErrorHandler(404, 'There are no users'))
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const createUser = async(req, res, next) => {
    try{
        const {name, email, amount} = req.body;
        if(!name  || !email || !amount) return next(customErrorHandler(401, 'All fields are required'))

        const isNamePresent = await User.findOne({name}) 
        const isEmailPresent = await User.findOne({email})

        if(isNamePresent || isEmailPresent) return next(customErrorHandler(401, 'User Already exists'))

        const user = await User.create({name,email,amount})
        res.status(200).json({message: 'User created successfully'})
    }catch(error){
        next(error)
    }
}

const updateUser = async (req, res, next) => {
  try{
    const {from, to, amount} = req.body;

    if(!from || !to || !amount) return next(customErrorHandler(401, 'All fields are required'));
    const sender = await User.findOne({name: from});
    const reciever = await User.findOne({name: to});


    if(!sender || !reciever) return next(customErrorHandler(401, 'User not found'))

    if(sender === reciever) return next(customErrorHandler(401, 'Sender and reciever cant be same'))


    const isSufficientBalance = sender.amount >= amount ? true : false

    if(!isSufficientBalance) return next(customErrorHandler(401, 'Insufficient balance'))

    const newAmountReciever = reciever.amount + Number(amount);

    const newAmountSender = sender.amount - amount;

    const updatedSender = await User.findOneAndUpdate({name: from},{amount: newAmountSender},{new: true});
    const updatedReciever = await User.findOneAndUpdate({name: to},{amount: newAmountReciever},{new: true});

    const newTransaction = await Transaction.create({
      sender: from,
      reciever: to,
      amount: amount
    })

    res.status(200).json({ newSender: updatedSender, newRec: updatedReciever, newTransaction: newTransaction});
  }catch(error){
    next(error)
  }
}

module.exports = { getAllUsers, createUser ,updateUser};
