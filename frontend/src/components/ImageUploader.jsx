import { useState, useRef } from 'react';

function ImageUploader({ images, setImages, previewUrls, setPreviewUrls, fileInputRef }) {

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        
        // Filter for image files only
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        
        if (imageFiles.length > 0) {
            const newImages = [...images, ...imageFiles];
            setImages(newImages);
            
            // Create preview URLs for new images
            const newPreviewUrls = imageFiles.map(file => URL.createObjectURL(file));
            const updatedPreviewUrls = [...previewUrls, ...newPreviewUrls];
            setPreviewUrls(updatedPreviewUrls);
            
        }
    };

    const removeImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
        
        setPreviewUrls(prevUrls => {
            const newUrls = prevUrls.filter((_, i) => i !== index);
            // Revoke the URL to free memory
            URL.revokeObjectURL(previewUrls[index]);
            return newUrls;
        });
        

    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <>
            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
            />
            
            {/* Image display area */}
            <div className="flex w-full grow bg-white @container p-4 ">
                {previewUrls.length > 0 ? (
                    <div className="w-full grid grid-cols-2 gap-2 @[480px]:grid-cols-3 @[640px]:grid-cols-4">
                        {previewUrls.map((url, index) => (
                            <div key={index} className="relative aspect-square rounded-xl overflow-hidden">
                                <img
                                    src={url}
                                    alt={`Upload ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    type='button'
                                    onClick={() => removeImage(index)}
                                    className="absolute top-2 right-2 w-6 h-6 bg-[#f5d63d] text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/1.5] rounded-xl flex border-2 border-dashed border-gray-300 items-center justify-center">
                        <div className="text-center text-gray-500">
                            <svg className="mx-auto h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm">No images uploaded yet</p>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="flex px-4 py-3 justify-start">
                <button
                    type='button'
                    onClick={triggerFileInput}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f5f4f0] text-[#181711] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e8e6e0] transition-colors"
                >
                    <span className="truncate">
                        {previewUrls.length > 0 ? 'Add More Photos' : 'Add Photos'}
                    </span>
                </button>
            </div>
        </>
    );
}

export default ImageUploader;
