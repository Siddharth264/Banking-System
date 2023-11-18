const Transaction = require('../models/transactionModel')

const getAllTransactions = async (req, res, next) => {
    try{
        const transactions = await Transaction.find({})
        if(!transactions) return next(customErrorHandler(404, 'There are no transactions'))

        res.status(200).json(transactions);
    }catch(error){
        next(error)
    }
}

module.exports = {getAllTransactions}