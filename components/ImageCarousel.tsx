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
	imageWidth?: number;
	imageHeight?: number;
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
	imageWidth = 300,
	imageHeight = 300,
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
			>
				{images.map((image) => (
					<SwiperSlide key={`${image.src}-${image.alt}`}>
						<Image
							src={image.src}
							alt={image.alt}
							width={imageWidth}
							height={imageHeight}
							className='rounded-lg object-cover'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
