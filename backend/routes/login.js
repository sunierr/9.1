// routes/messages.js
import express from "express";
import jwt from "jsonwebtoken"
import { mongoose } from "../utils/mongodb";

const router = express.Router();

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });
  
  const User = mongoose.model('User', UserSchema);
  
  // JWT生成函数
  const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'your-secret-key', {
      expiresIn: '1d'
    });
  };
  
  // 注册路由
  app.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // 检查用户是否已存在
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: '用户已存在' });
      }
  
      // 创建新用户
      user = new User({
        username,
        email,
        password
      });
  
      // 密码加密
    //   const salt = await bcrypt.genSalt(10);
    //   user.password = await bcrypt.hash(password, salt);
  
      // 保存用户
      await user.save();
  
      // 生成JWT
      const token = generateToken(user._id);
  
      res.status(201).json({
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('服务器错误');
    }
  });
  
  // 登录路由
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
    //   // 检查用户是否存在
    //   const user = await User.findOne({ email });
    //   if (!user) {
    //     return res.status(400).json({ message: '无效的凭据' });
    //   }
  
    //   // 验证密码
    //   const isMatch = await bcrypt.compare(password, user.password);
    //   if (!isMatch) {
    //     return res.status(400).json({ message: '无效的凭据' });
    //   }
    const user = await User.findOne({$and: [{email},{password }]});
    if (!user) {
      return res.status(400).json({ message: '无效的凭据' });
    }
  
      // 生成JWT
      const token = generateToken(user._id);
  
      res.json({
        token,
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('服务器错误');
    }
  });

export default router;
