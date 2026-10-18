import type { ImgHTMLAttributes } from 'react';
import { PHOTO_VARIANTS } from '@/lib/photo-variants';

export function JobPhoto({ src, alt, width, height, sizes = '100vw', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const photo = typeof src === 'string' ? PHOTO_VARIANTS[src] : undefined;
  return <img {...props} src={src} alt={alt} width={photo?.width ?? width} height={photo?.height ?? height}
    srcSet={photo && typeof src === 'string' ? `${photo.mobile} ${Math.round(photo.width * Math.min(960 / photo.width, 960 / photo.height, 1))}w, ${src} ${photo.width}w` : undefined}
    sizes={sizes} decoding="async" />;
}
