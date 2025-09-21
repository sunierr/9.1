import axios from "axios";
import { AuthUtils } from "./AuthUtils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// 创建axios实例
const api = axios.create({ baseURL: "/api" });

// 顶层变量存储跳转函数（作为拦截器和组件间的桥梁）
let redirectToLogin = null;

// 请求拦截器：给所有API请求添加JWT
api.interceptors.request.use((config) => {
  const token = AuthUtils.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 响应拦截器：处理Token过期
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      AuthUtils.logout(); // 清除过期Token
      // 调用顶层变量中存储的跳转函数（由组件注入）
      if (redirectToLogin) {
        redirectToLogin();
      }
    }
    return Promise.reject(err);
  }
);

// 自定义钩子：注入导航逻辑（在组件中使用）
export const useApiWithAuth = () => {
  const navigate = useNavigate(); // 在钩子内部合法调用useNavigate

  // 组件挂载/更新时，将导航逻辑绑定到顶层变量
  useEffect(() => {
    // 赋值：将包含navigate的函数绑定到顶层变量
    redirectToLogin = () => {
      navigate("/login", { replace: true });
    };

    // 组件卸载时清理，避免内存泄漏
    return () => {
      redirectToLogin = null;
    };
  }, [navigate]); // 依赖navigate，确保使用最新的导航函数

  return api; // 返回axios实例供组件使用
};

// 导出api实例（供非组件场景使用，需注意此时可能没有导航能力）
export default api;
