import jwt from "jsonwebtoken"

const auth = (req, res, next) => {
    // 获取token
    const token = req.header('x-auth-token');
  
    // 检查是否有token
    if (!token) {
      return res.status(401).json({ message: '没有令牌，授权被拒绝' });
    }
  
    try {
      // 验证token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: '令牌无效' });
    }
  };

export  {auth}