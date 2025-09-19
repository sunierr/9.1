import { useState } from "react"
import axios from 'axios'

function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleIsLogin = () => {
    setIsLogin((prev) => !prev);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const uri = isLogin ? '/api/login/login' : '/api/login/signup'
    try {
      // 使用 axios 发送 POST 请求
      const response = await axios.post(uri, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // 请求成功处理
      console.log('提交成功', response.data);
      // 可以在这里添加成功提示或页面跳转等逻辑
    } catch (error) {
      // 错误处理
      console.error('提交失败', error.response?.data || error.message);
      // 可以在这里添加错误提示逻辑
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <h2 className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Bra Swap</h2>
          <div className="flex w-12 items-center justify-end">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#181711] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            >
              <div className="text-[#181711]" data-icon="Question" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <h2 className="text-[#181711] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">{isLogin ? 'Welcome Back' : 'Sign up'} </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Email"
                name="email"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181711] focus:outline-0 focus:ring-0 border-none bg-[#f5f4f0] focus:border-none h-14 placeholder:text-[#8a8360] p-4 text-base font-normal leading-normal"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          {!isLogin && (
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Username"
                  name="username"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181711] focus:outline-0 focus:ring-0 border-none bg-[#f5f4f0] focus:border-none h-14 placeholder:text-[#8a8360] p-4 text-base font-normal leading-normal"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
            </div>
          )}

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Password"
                name="password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181711] focus:outline-0 focus:ring-0 border-none bg-[#f5f4f0] focus:border-none h-14 placeholder:text-[#8a8360] p-4 text-base font-normal leading-normal"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <p className="text-[#8a8360] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">{isLogin ? 'Forgot Password?' : null}</p>
          <div className="flex px-4 py-3">
            <button
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#f5d63d] text-[#181711] text-base font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">{isLogin ? 'Log In' : 'Sign Up'}</span>
            </button>
          </div>
        </form>
      </div>
      <div>
        <p className="text-[#8a8360] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline" onClick={handleIsLogin}>Don't have an account? Sign Up</p>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  )
}

export default Login