function Item() {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
        >
            <div>
                <div className="flex items-center bg-white p-4 pb-2 justify-between">
                    <div className="text-[#181711] flex size-12 shrink-0 items-center" data-icon="ArrowLeft" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                        </svg>
                    </div>
                    <h2 className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Bra Details</h2>
                </div>
                <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
                    <div className="flex items-stretch p-4 gap-3">
                      
                        <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                                style={{
                                    backgroundImage:
                                        'url("/1.jpg")',
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
                <h1 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Lace Trim Push-Up Bra</h1>
                <p className="text-[#181711] text-base font-normal leading-normal pb-3 pt-1 px-4">Size: 34B | Brand: Victoria's Secret | Condition: Gently Used</p>
                <p className="text-[#181711] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    This bra is in excellent condition, worn only a few times. It features a beautiful lace trim and provides a comfortable push-up effect. Perfect for adding a touch of
                    elegance to your everyday wear.
                </p>
                <h3 className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Price or Swap</h3>
                <p className="text-[#181711] text-base font-normal leading-normal pb-3 pt-1 px-4">$25 or Open to Swaps</p>
                <h3 className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Seller Information</h3>
                <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDOtuhKfMTibTGdqOGQnGfjA__OoOo_Vn4YXLNPOM86CIcQ1pjFUhXpOr-QQ1roFGz5wdnMLMsD4_FmfrEdqf27j5so8hWg1o1aBN9w97y6uYS0UqyLKbSd0uMM4re5aFFlt4tJTFGOlpmv70Czs3ci3B8kfszggDEaqz2VaWkCqXsBwiAkq6t2j0gpIg-XKM3UaO9MbhsmojDmZFDlAJvzLYMtvfzyeiHVJEumCvGbjbU2cofWBQhqEjJ-kQ1wcFrZXuYTKhdozE")',
                        }}
                    ></div>
                    <div className="flex flex-col justify-center">
                        <p className="text-[#181711] text-base font-medium leading-normal line-clamp-1">Sophia</p>
                        <p className="text-[#8a8360] text-sm font-normal leading-normal line-clamp-2">Joined 2022</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                        <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f5d63d] text-[#181711] text-sm font-bold leading-normal tracking-[0.015em] grow"
                        >
                            <span className="truncate">Message Seller</span>
                        </button>
                        <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f5f4f0] text-[#181711] text-sm font-bold leading-normal tracking-[0.015em] grow"
                        >
                            <span className="truncate">Make an Offer</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-25 bg-white"></div>
        </div>
    );
}

export default Item;