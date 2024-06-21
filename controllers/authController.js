const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username });
  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  req.session.adminId = admin._id;
  res.json({ message: 'Login successful' });
};

const logout = (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logout successful' });
};

const checkAuth = (req, res) => {
  if (req.session.adminId) {
    res.json({ message: 'Authenticated' });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
};

module.exports = { login, logout, checkAuth };
