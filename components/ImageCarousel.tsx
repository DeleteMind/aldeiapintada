'use client';

import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageItem {
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

interface ImageCarouselProps {
	images: ImageItem[];
	imageHeight?: number; // Now only used for container height class, not individual images
	slidesPerView?: number;
	spaceBetween?: number;
	autoplayDelay?: number;
	breakpoints?: {
		[key: number]: {
			slidesPerView: number;
		};
	};
	className?: string;
}
export default function ImageCarousel({
	images,
	imageHeight = 384, // Default height in pixels for h-96 (384px)
	slidesPerView = 1,
	spaceBetween = 20,
	autoplayDelay = 3000,
	breakpoints = {
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
	className = 'pb-8',
}: ImageCarouselProps) {
	return (
		<section className='w-full mx-auto'>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={spaceBetween}
				slidesPerView={slidesPerView}
				navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
				breakpoints={breakpoints}
				className={className}
				style={
					{
						'--swiper-navigation-color': 'rgb(20 184 166)',
						'--swiper-pagination-color': 'rgb(20 184 166)',
						'--swiper-pagination-bullet-inactive-color': 'rgb(156 163 175)',
					} as React.CSSProperties
				}
			>
				{images.map((image) => (
					<SwiperSlide
						key={`${image.src}-${image.alt}`}
						style={{ height: `${imageHeight}px` }}
					>
						<div className='relative w-full h-full rounded-lg overflow-hidden'>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								width={450}
								height={450}
								className='object-cover'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
