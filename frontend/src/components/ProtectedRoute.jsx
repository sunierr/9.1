import { Navigate, Outlet } from "react-router-dom";
import { AuthUtils } from "../utils/AuthUtils";

// 受保护路由：仅登录用户可访问
const ProtectedRoute = () => {
  const isLogin = AuthUtils.isLoggedIn();
  
  // 未登录：重定向到登录页，并携带当前路径（方便登录后返回）
  if (!isLogin) {
    return <Navigate to="/login" state={{ from: window.location.pathname }} replace />;
  }
  
  // 已登录：渲染当前路由对应的组件（Outlet 是嵌套路由的占位符）
  return <Outlet />;
};

export default ProtectedRoute;