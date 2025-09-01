function Messages (){
    return (
        <div
      className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
      style={{"fontFamily": "Plus Jakarta Sans, Noto Sans, sans-serif"}}
    >
      <div>
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <div className="text-[#181711] flex size-12 shrink-0 items-center" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Messages</h2>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAE_EVESwf2ImaCmoBMDIeM4P8i0-4sY7uz6fg98yDFQhv1WCadq7ybtRxWrSP6alZ_-kPekwbPyNjLXb8t_0ppY39eWe3b5aO0-esEGUChB63ts2TKJAtiy7Hchdz1QTgEduGCk4479KzVW8rmHezE9klrwt3YIhRfJBmMPkZq3GGo8cUt11tPFo6I4fN4sI1jVZaXw-lfe1xvPiV1OG7WOqG-MqYZp5ocLX-gEamQQ0RpeFgqH94jCgQajXfueNdFFsfSCPn4ehg")'}}
          ></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#181711] text-base font-medium leading-normal line-clamp-1">Sophia</p>
            <p className="text-[#8a8360] text-sm font-normal leading-normal line-clamp-2">Hi! I'm interested in the bra you're selling. Is it still available?</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBv6H9m3CSdoq4lETR3zdHdyl3SV2O6yPVm1644Zzrc0Ca-3jdey8-3Cm2JgIdofNgxvs_j-D7gd5FkTORwBFsY-K4QW16klhwfHfQ6G03LfXRJGYJ1zUic_X96mLU4lD82ZOngiWwvhbCCnH5FxicF9FUiHEWofaRm_fjgrho1-C1j7tlTncw2NZun1EoaWp5sJTe3aELgqxvyY09OvGawrW9b8nyIhkBlGVvytokyxtpwdV3CppUkES3yyW28Co-Gz7j_AQgjpkY")'}}
          ></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#181711] text-base font-medium leading-normal line-clamp-1">Olivia</p>
            <p className="text-[#8a8360] text-sm font-normal leading-normal line-clamp-2">I'm looking for a bra in size 34B. Do you have any?</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1lTYcxE-o4QwlUOZfzvShfHVfZx-HBJMQlmXdBAIhXRPtb8xhP67umZNxO1fV25HvtXEHNQidCdSJlC7hxqydIDWtR4Vj4ayU9E1brV6GxKtf6PsUxjw1oKJoMYlICW_A2gUn2G3B3Iz_LPCGmTVYMBZZx_dX1Tkcajyz11C8cBLaWdNGD8XVaTrvkV1D7etkBvOog611-hCmMeAAVAsP1_vu2Y6FXATxsAz75LasSBf0wB68v9ANDdEDSP1tdSOYBP3tjqddUvc")'}}
          ></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#181711] text-base font-medium leading-normal line-clamp-1">Emma</p>
            <p className="text-[#8a8360] text-sm font-normal leading-normal line-clamp-2">I'm interested in swapping my bra. What sizes are you looking for?</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWSS8MZmyOJBjvqFr5b-SAl8xg9VUTM01_r_Kgzsdk8WDWltP1-JpHwCFiZNlrbLYFcFPa75z47RLB5eecrrYef-uZfc4qiq-oNWM_iMNG6GKrz4UgQCUFwWbq4R-q0FYP0-iOCH9YbcfB9hFknw0oZXiUB_S0xwUaVw1VqPn6GdPq4erSJ_UmdAizGCIXEfkw9n_Z3ya5GbkgCNwtcjkfs7tOZfDM0_6e38TgE0FUaLWYVmFSWvAd9iclMNbtYMGWn7cht9rEcZw")'}}
          ></div>
          <div className="flex flex-col justify-center">
            <p className="text-[#181711] text-base font-medium leading-normal line-clamp-1">Ava</p>
            <p className="text-[#8a8360] text-sm font-normal leading-normal line-clamp-2">I'm selling a bra in size 36C. Are you interested?</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Messages
