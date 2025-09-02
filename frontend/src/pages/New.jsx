import { useState, useRef } from 'react';
import ImageUploader from '../components/ImageUploader';
import BraSizeSelector from '../components/BraSizeSelector';

function New() {
    const [images, setImages] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const fileInputRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        description: '',
        size: '',
        brand: '',
        condition: '',
        price: '',
        swap: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };


    const handleSize = (val) => {
        setFormData(prevState => ({
            ...prevState,
            size: val,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        // 追加文本字段
        data.append('description', formData.description);
        data.append('size', formData.size);
        data.append('brand', formData.brand);
        data.append('condition', formData.condition);
        data.append('price', formData.price);
        data.append('swap', formData.swap);

        // 追加多个文件
        if (images.length > 0) {
            // 逐个追加文件（使用相同的field name）
            for (let i = 0; i < images.length; i++) {
                data.append('images', images[i]); // 注意：这里使用'images'作为字段名
            }
        } else {
            alert('请至少选择一个图片文件');
            return;
        }

        console.log(data)

        try {
            const response = await fetch('http://localhost:5000/api/items/upload-multiple', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                const result = await response.json();
                alert(`提交成功！共上传 ${result.files.length} 个文件`);
                // 重置表单
                setFormData({
                    description: '',
                    size: '',
                    brand: '',
                    condition: '',
                    price: '',
                    swap: false
                });
                setPreviewUrls([])
                formRef.current.reset();
            } else {
                throw new Error('提交失败');
            }
        } catch (error) {
            console.error('错误:', error);
            alert('提交失败，请重试');
        }
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden"
            style={{
                '--select-button-svg': "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(138,131,96)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
                'fontFamily': '"Plus Jakarta Sans", "Noto Sans", sans-serif'
            }}
        >
            <form ref={formRef} onSubmit={handleSubmit}>
                <div>
                    <div className="flex items-center bg-white p-4 pb-2 justify-between">
                        <div className="text-[#181711] flex size-12 shrink-0 items-center" data-icon="X" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">List an Item</h2>
                    </div>

                    <ImageUploader images={images} setImages={setImages} setPreviewUrls={setPreviewUrls} previewUrls={previewUrls} fileInputRef={fileInputRef} />

                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <input
                                placeholder="Description"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181711] focus:outline-0 focus:ring-0 border-none bg-[#f5f4f0] focus:border-none h-14 placeholder:text-[#8a8360] p-4 text-base font-normal leading-normal"
                                value={formData.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </label>
                    </div>
                    <h3 className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Details</h3>
                    <BraSizeSelector onChange={handleSize}/>
                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <input
                                placeholder="brand"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181711] focus:outline-0 focus:ring-0 border-none bg-[#f5f4f0] focus:border-none h-14 placeholder:text-[#8a8360] p-4 text-base font-normal leading-normal"
                                value={formData.brand}
                                onChange={handleInputChange}
                                name="brand"
                            />
                        </label>
                    </div>
                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <select
                                defaultValue=''
                                className="appearance-none form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181711] focus:outline-0 focus:ring-0 border-none bg-[#f5f4f0] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#8a8360] p-4 text-base font-normal leading-normal"
                            >
                                <option value="" disabled hidden>Condition</option>
                                <option value="new">new</option>
                                <option value="used">used</option>
                                <option value="refurbished">refurbished</option>
                                <option value="other">other</option>
                        
                            </select>
                            {/* <Select
                                className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181711] focus:outline-0 focus:ring-0 border-none bg-[#f5f4f0] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#8a8360] p-4 text-base font-normal leading-normal'
                                placeholder="Select a person"
    
                                onChange={handleInputChange}
                 
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'tom',
                                        label: 'Tom',
                                    },
                                ]}
                            /> */}
                        </label>
                    </div>
                    <h3 className="text-[#181711] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Price</h3>
                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <input
                                placeholder="Price"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181711] focus:outline-0 focus:ring-0 border-none bg-[#f5f4f0] focus:border-none h-14 placeholder:text-[#8a8360] p-4 text-base font-normal leading-normal"
                                value={formData.price}
                                name='price'
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
                        <p className="text-[#181711] text-base font-normal leading-normal flex-1 truncate">Open to Swaps</p>
                        <div className="shrink-0">
                            <label
                                className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-[#f5f4f0] p-0.5 has-[:checked]:justify-end has-[:checked]:bg-[#f5d63d]"
                            >
                                <div className="h-full w-[27px] rounded-full bg-white" style={{ "boxShadow": "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px" }}></div>
                                <input name="swap" type="checkbox" className="invisible absolute" onChange={handleInputChange} />
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex px-4 py-3">
                        <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-[#f5d63d] text-[#181711] text-base font-bold leading-normal tracking-[0.015em]"
                            type='submit'
                        >
                            <span className="truncate">List Item</span>
                        </button>
                    </div>
                    <div className="h-5 bg-white"></div>
                </div>
            </form>
            <div>
                <div className="h-20 bg-white"></div>
            </div>
        </div>
    )
}

export default New;