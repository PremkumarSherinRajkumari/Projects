//transactions.js
const uuid = require('uuid').v4;


function makeTransactionsList () {
  const id1 = uuid();
  const id2 = uuid();

  const transactionsList = {};

  const transactions = {
    
  };

  transactionsList.contains = function contains (id) {
    return !!transactions[id];
  };

  transactionsList.getTransactions = function getTransactions () {
    return transactions;
  };

  transactionsList.addTransaction = function addTransaction ({ item, amount }) {
    const id = uuid();
    transactions[id] = {
      id,
      item,
      amount
    };

    return id;
  };

  transactionsList.getTransaction = function getTransaction (id) {
    return transactions[id];
  };


  transactionsList.deleteTransaction = function deletetransaction (id) {
    delete transactions[id];
  };


  return transactionsList;
};

module.exports = {
  makeTransactionsList,
};