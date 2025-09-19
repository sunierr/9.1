const AuthUtils = {
    // 存储 Token
    setToken: (token) => localStorage.setItem("jwt_token", token),
    // 获取 Token
    getToken: () => localStorage.getItem("jwt_token"),
    // 校验是否登录（简化版，实际需加 Token 过期校验）
    isLoggedIn: () => !!localStorage.getItem("jwt_token"),
    // 登出（清除 Token）
    logout: () => localStorage.removeItem("jwt_token"),
  };

  export { AuthUtils}