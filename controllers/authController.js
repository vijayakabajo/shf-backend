const Admin = require('../models/admin');
const bcrypt = require('bcrypt');


//Handle Login
const login = async (req, res) => {
  const { username, password } = req.body;   //destruct
  const admin = await Admin.findOne({ username });  //find admin
  if (!admin || !(await bcrypt.compare(password, admin.password))) {  //check if not admin or pw not matched
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  req.session.adminId = admin._id;            //if admin then store in session
  res.json({ message: 'Login successful' });
};

// app.use(session({
//   secret: process.env.SESSION_SECRET || 'jkbfoebvoirvoirnikewnin',
//   resave: false,
//   saveUninitialized: false,
//   store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
//   cookie: { secure: false }
// }));

//Logout
const logout = (req, res) => {
  req.session.destroy();    //session destroy
  res.json({ message: 'Logout successful' });
};

//Auth Check
const checkAuth = (req, res) => {
  if (req.session.adminId) {     //found in sesssion?
    res.json({ message: 'Authenticated' });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
};

module.exports = { login, logout, checkAuth };
