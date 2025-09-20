import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function List() {
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
            style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
        >
            <div>
                <div className="flex items-center bg-white p-4 pb-2 justify-between">
                    <div className="text-[#181711] flex size-12 shrink-0 items-center" data-icon="Sliders" data-size="24px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z"
                            ></path>
                        </svg>
                    </div>
                    <h2 className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Bras</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button
                            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#181711] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
                        >
                            <div className="text-[#181711]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="px-4 py-3">
                    <label className="flex flex-col min-w-40 h-12 w-full">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                            <div
                                className="text-[#8a8360] flex border-none bg-[#f5f4f0] items-center justify-center pl-4 rounded-l-xl border-r-0"
                                data-icon="MagnifyingGlass"
                                data-size="24px"
                                data-weight="regular"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                </svg>
                            </div>
                            <input
                                placeholder="Search by size, brand, or style"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181711] focus:outline-0 focus:ring-0 border-none bg-[#f5f4f0] focus:border-none h-full placeholder:text-[#8a8360] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                value=""
                            />
                        </div>
                    </label>
                </div>
                <div className="pb-3">
                    <div className="flex border-b border-[#e6e4db] px-4 gap-8">
                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#181711] text-[#181711] pb-[13px] pt-4" href="#">
                            <p className="text-[#181711] text-sm font-bold leading-normal tracking-[0.015em]">Grid</p>
                        </a>
                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#8a8360] pb-[13px] pt-4" href="#">
                            <p className="text-[#8a8360] text-sm font-bold leading-normal tracking-[0.015em]">List</p>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <Link to="/item">
                        <div className="flex flex-col gap-3 pb-3">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                                style={{
                                    backgroundImage:
                                        'url("/1.jpg")'
                                }}
                            ></div>
                            <div>
                                <p className="text-[#181711] text-base font-medium leading-normal">34B, Natori</p>
                                <p className="text-[#8a8360] text-sm font-normal leading-normal">$25</p>
                            </div>
                        </div>
                    </Link>

                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{
                                backgroundImage:
                                    'url("/1.jpg")'
                            }}
                        ></div>
                        <div>
                            <p className="text-[#181711] text-base font-medium leading-normal">36C, Victoria's Secret</p>
                            <p className="text-[#8a8360] text-sm font-normal leading-normal">$30</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{
                                backgroundImage:
                                    'url("/1.jpg")'
                            }}
                        ></div>
                        <div>
                            <p className="text-[#181711] text-base font-medium leading-normal">32A, Aerie</p>
                            <p className="text-[#8a8360] text-sm font-normal leading-normal">$20</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{
                                backgroundImage:
                                    'url("../public/1.jpg")'
                            }}
                        ></div>
                        <div>
                            <p className="text-[#181711] text-base font-medium leading-normal">38D, Wacoal</p>
                            <p className="text-[#8a8360] text-sm font-normal leading-normal">$35</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{
                                backgroundImage:
                                    'url("../public/1.jpg")'
                            }}
                        ></div>
                        <div>
                            <p className="text-[#181711] text-base font-medium leading-normal">34C, Calvin Klein</p>
                            <p className="text-[#8a8360] text-sm font-normal leading-normal">$28</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{
                                backgroundImage:
                                    'url("../public/1.jpg")'
                            }}
                        ></div>
                        <div>
                            <p className="text-[#181711] text-base font-medium leading-normal">36B, ThirdLove</p>
                            <p className="text-[#8a8360] text-sm font-normal leading-normal">$32</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="h-20 bg-white"></div>
            </div>
        </div>
    )
}

export default List;