'use client'
import { useState } from 'react';
import Image from 'next/image';

 import React from 'react'
 
 const ImageWithFallBack = (props: any) => {
    const { src, fallbackSrc, ...rest} = props;
    const [imgSrc, setImgSrc] = useState(src);

   return (
     <Image 
     {...rest}
     src={imgSrc}
     onError={() => {setImgSrc(fallbackSrc)}}
     alt=""/>
   )
 }
 
 export default ImageWithFallBack