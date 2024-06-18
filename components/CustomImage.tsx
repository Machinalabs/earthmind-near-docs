import React from 'react';

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fetchpriority?: 'high' | 'low' | 'auto';
}

const CustomImage: React.FC<CustomImageProps> = (props) => {
    return <img {...props} />;
};

export default CustomImage;
