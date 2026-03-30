'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Text } from '@/components/Text';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PosterItem {
	src: string | null;
	title: string;
	date: string;
	href: string;
}

interface PosterCarouselProps {
	posters: PosterItem[];
	posterHeight?: number;
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

function formatPosterDate(date: string) {
	return new Date(date).toLocaleDateString('pt-PT', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
}

export default function PosterCarousel({
	posters,
	posterHeight = 540,
	slidesPerView = 1,
	spaceBetween = 20,
	autoplayDelay = 3500,
	breakpoints = {
		640: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
	className = 'pb-8',
}: PosterCarouselProps) {
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
				{posters.map((poster) => (
					<SwiperSlide
						key={`${poster.href}-${poster.title}`}
						style={{ height: `${posterHeight}px` }}
					>
						<Link href={poster.href} className='group block h-full'>
							<article className='relative h-full overflow-hidden rounded-lg bg-neutral-200'>
								{poster.src ? (
									<Image
										src={poster.src}
										alt={poster.title}
										fill
										className='object-cover transition-transform duration-300 group-hover:scale-[1.02]'
									/>
								) : (
									<div className='absolute inset-0 bg-neutral-200' aria-hidden='true' />
								)}

								<div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent' />

								<div className='absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5'>
									<Text
										size='sm'
										color='secondary'
										weight='medium'
										invertColor
										className='tracking-[0.2em] uppercase'
									>
										{formatPosterDate(poster.date)}
									</Text>

									<Text
										size='2xl'
										color='primary'
										weight='bold'
										invertColor
										className='leading-tight'
									>
										{poster.title}
									</Text>
								</div>
							</article>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
