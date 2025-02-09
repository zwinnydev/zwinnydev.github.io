import React from 'react';
import Image from "next/image";
import { Content } from '@/types';



const ContentImage = ({content: {image, title}}: {content: Content}) => image && (
    <Image
        src={image}
        alt={title}
        width={720}
        height={405}
        priority
        className="my-8 border bg-secondary transition-colors"
    />
)

export default ContentImage;