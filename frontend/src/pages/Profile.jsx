import { useNavigate } from "react-router-dom"
import { AuthUtils } from "../utils/AuthUtils"

function Profile() {
    const navigate = useNavigate()
    const handleClick = (e) => {
        AuthUtils.logout()
        navigate('/login')
    }
    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
             style={{'fontFamily': "Plus Jakarta Sans, Noto Sans, sans-serif"}}
        >
            <div>
                <div className="flex items-center bg-white p-4 pb-2 justify-between">
                    <h2 className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Profile</h2>
                    <div className="flex w-12 items-center justify-end">
                        <button
                            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#181711] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
                            onClick={handleClick}
                        >
                            <div className="text-[#181711]" data-icon="Gear" data-size="24px" data-weight="regular">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex p-4 @container">
                    <div className="flex w-full flex-col gap-4 items-center">
                        <div className="flex gap-4 flex-col items-center">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                                style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZggRCOvtJ96EH1jFQYLVh51TMnudDzB5OvsR953TfQAInu08PTsCZU-5x61xJP5qPT-VLB8ufD6N1ZZYfoDR5Ezc4aBywsTwiVLznsRTg4B5pLQmp4fOs4pYCqaQoz7SIJlQ4u28iWRKdcLA5-xcR_zUrJu_z3aRnG51eHNucv4G7vKta2xFyDV-JlZuxGuPpKc9_AiUez6pTJzXL5hx46j-dv95Nhb1H-mA-WBgYFaRqZmDLBvOgTwomlLvopnluq__EukqrplM")'}}
                            ></div>
                            <div className="flex flex-col items-center justify-center justify-center">
                                <p className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Sophia Carter</p>
                                <p className="text-[#8a8360] text-base font-normal leading-normal text-center">@sophia_c</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 px-4 py-3">
                    <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#e6e4db] p-3 items-center text-center">
                        <p className="text-[#181711] tracking-light text-2xl font-bold leading-tight">12</p>
                        <div className="flex items-center gap-2"><p className="text-[#8a8360] text-sm font-normal leading-normal">Listings</p></div>
                    </div>
                    <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#e6e4db] p-3 items-center text-center">
                        <p className="text-[#181711] tracking-light text-2xl font-bold leading-tight">25</p>
                        <div className="flex items-center gap-2"><p className="text-[#8a8360] text-sm font-normal leading-normal">Swaps</p></div>
                    </div>
                    <div className="flex min-w-[111px] flex-1 basis-[fit-content] flex-col gap-2 rounded-lg border border-[#e6e4db] p-3 items-center text-center">
                        <p className="text-[#181711] tracking-light text-2xl font-bold leading-tight">8</p>
                        <div className="flex items-center gap-2"><p className="text-[#8a8360] text-sm font-normal leading-normal">Sales</p></div>
                    </div>
                </div>
                <h2 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">My Listings</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAypLW2C4Vq2HMLK4bzdz94mFbmcGSCt0S8AlQUeQeJqEnQX9_w7bpt6R18YtDgZ3flFfDttC33Rr2lHII9KmXmTVowUWhGS3Pop3PBLMVmVRPdKeB7V40yIZKGKQxlEPLIpROLHozJAwKt622nSbNeytS1l7zkRu_fr5ZGcjW8FDAmB5QGTWHwdh7FMcpL2PtLw-L31J595jyrCNIJ5J8XKr1U17UYVJnZn-r8VseqiNMRxbueaclSvG9CcFhLEzUUzs9zUMzY3Mw")'}}
                        ></div>
                        <p className="text-[#181711] text-base font-medium leading-normal">Lace Bralette</p>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHYYx2M0xdzgSFGOOKbINxDXPZWn9PNcDBEIzHRoHtpgva_DvKlKox8i7Ee1WJ24uqZQKxPzQH69hgMvTpiWPpv_V7rMdFb8fvGqXxd0l4U-v586KQRcsN_AlJN899Nc5PqnjBLvzB058YR8geUIdd1EWVEifHuJpa99gPZfMDzH0SypvTOyki_yw4Ie77OGIccV4DaaSB86XpK6h5r1AHKLCwuTtV36M1uCiVljbVpG4U3jsN_geFkOdU5zOeR03ELiJ3-fVa-Fs")'}}
                        ></div>
                        <p className="text-[#181711] text-base font-medium leading-normal">Sports Bra</p>
                    </div>
                    <div className="flex flex-col gap-3 pb-3">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADq0rK9ioc1APbdGsnk8NnpSh246sqBTxk_ZKhiygG6XAl-Tbcu47xIM4ryghhczxtUxDq6ljlQxvf5jOzqpvTt4HRVHpBKzL4c-6TVi0PYqeVk00fCN5yrZqh0hntL7CNBFlwcte03uaE7VEhtgDn68BpLT6BN-3BSM5qCP1FUoH5PODv9KXo3rPQ7i0MayW5KOE9bMxek032IXIZD14DRmyyaY0s7sSjoeyKaQEkPxj6jcaihCM9Mp56yKiADd3zcPjsvfdfs_Y")'}}
                        ></div>
                        <p className="text-[#181711] text-base font-medium leading-normal">Push-Up Bra</p>
                    </div>
                </div>
                <h2 className="text-[#181711] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Past Transactions</h2>
                <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                    <div className="flex items-center gap-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaFrCDE3CPuCRxOZJ0_2xBzTMOXJSmLOmmZy36H_UCfpkGwnJ7YRc31wKXOVJfrnG27RLgpvWsK_46Z_0wxR9owhE1qW6hW1mRGvV1HzFj_TH6DeFtIbiu0vALPHpzeVtHtvWzcYBMeGGZ1-A_Hk-i4tRYG42pjEeicTB0S0Hc5A7No0-8FwSL2u1v2oDfqRh6qSMB6w8grnE-UzWAglvOqI9QxwAUsrfHUfP4xwYiiPug7Pl1hKl9bE6VH9awWOcIq0GCxzUoUWI")'}}
                        ></div>
                        <div className="flex flex-col justify-center">
                            <p className="text-[#181711] text-base font-medium leading-normal line-clamp-1">Lace Bralette</p>
                            <p className="text-[#8a8360] text-sm font-normal leading-normal line-clamp-2">Sold</p>
                        </div>
                    </div>
                    <div className="shrink-0"><p className="text-[#181711] text-base font-normal leading-normal">$25</p></div>
                </div>
                <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                    <div className="flex items-center gap-4">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUU000Zo55ZMTgWq8zOQDgQb4jG8qpohj8NkeQyR1gTryChT0mkygX-NNSAq3Qbc8h-DjZwq-XZyT-U7XZOkIyzEhbZqb0dsWiJW5_4zV56l7j_KKhyBl3UaOtE759ZpMxK2R2Jl4CkgEms2lkal1jGd9v7SVdI5z5sJGgKLo7qpCSvM_0BkOTE-HvRadW70JFYgZXXvqUcO9YF8K-_7_fjEnN_h0orJYCEE6LRu7VHSnSSFP7UQ3IvDq-suSBLkGXpqDSp9cT2f4")'}}
                        ></div>
                        <div className="flex flex-col justify-center">
                            <p className="text-[#181711] text-base font-medium leading-normal line-clamp-1">Sports Bra</p>
                            <p className="text-[#8a8360] text-sm font-normal leading-normal line-clamp-2">Swapped</p>
                        </div>
                    </div>
                    <div className="shrink-0"><p className="text-[#181711] text-base font-normal leading-normal">with @emma_j</p></div>
                </div>
            </div>
        </div>
    )
}

export default Profile