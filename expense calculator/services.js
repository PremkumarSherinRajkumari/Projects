//services.js
const sessions = require('./sessions.js');
const users = require('./users.js');
const transactions = require('./transactions.js');

const getSessions = (req, res) => {
  const sid = req.cookies.sid;
  if (!sid) {
    return null; // No session ID found
  }
  
  const username = sessions.getSessionUser(sid);
  if (!username || !users.isValid(username)) {
    return null; // Invalid session or user
  }

  return username;
};

const checkSessionsService = (req, res) => {
  const username = getSessions(req, res);
  if (!username) {
    return res.status(401).json({ error: 'auth-missing' });
  }
  res.json({ username });
};

const loginService = (req, res) => {
  const { username } = req.body;

  if (!users.isValid(username)) {
    return res.status(400).json({ error: 'invalid-username' });
  }

  if (username === 'dog') {
    return res.status(403).json({ error: 'auth-insufficient' });
  }

  const sid = sessions.addSession(username);
  let transactionsList = users.getUserData(username);

  if (!transactionsList) {
    transactionsList = transactions.makeTransactionsList();
    users.addUserData(username, transactionsList);
  }

  res.cookie('sid', sid);
  const list = transactionsList.getTransactions();
  res.json(list);
};

const logoutService = (req, res) => {
  const sid = req.cookies.sid;
  if (sid) {
    res.clearCookie('sid');
    sessions.deleteSession(sid); // Delete the session
  }
  res.json({ username: null });
};

const getTransactionsService = (req, res) => {
  const username = getSessions(req, res);
  if (!username) {
    return res.status(401).json({ error: 'auth-missing' });
  }

  const transactionsList = users.getUserData(username);
  if (!transactionsList) {
    return res.status(404).json({ error: 'transactions-not-found' });
  }

  res.json(transactionsList.getTransactions());
};

const addTransactionsService = (req, res) => {
  const username = getSessions(req, res);
  if (!username) {
    return res.status(401).json({ error: 'auth-missing' });
  }

  const { item, amount } = req.body;
  if (!item || !amount) {
    return res.status(400).json({ error: 'required-fields-missing' });
  }

  const transactionsList = users.getUserData(username);
  if (!transactionsList) {
    return res.status(404).json({ error: 'transactions-not-found' });
  }

  const id = transactionsList.addTransaction({ item, amount });
  res.json(transactionsList.getTransaction(id));
};

const deleteTransactionsService = (req, res) => {
  const username = getSessions(req, res);
  if (!username) {
    return res.status(401).json({ error: 'auth-missing' });
  }

  const { id } = req.params;
  const transactionsList = users.getUserData(username);
  if (!transactionsList || !transactionsList.contains(id)) {
    return res.status(404).json({ error: `transaction ${id} not found` });
  }

  transactionsList.deleteTransaction(id);
  res.json({ message: `transaction ${id} deleted` });
};

module.exports = {
  getSessions,
  checkSessionsService,
  loginService,
  logoutService,
  getTransactionsService,
  addTransactionsService,
  deleteTransactionsService
};
