'use client'

import Masonry from "react-masonry-css"
import { Photo, PHOTO_CATEGORY_NAME } from "./publicEnums"
import { getAssetURL } from "./getAssetURL"
import { useState } from "react"




function PhotoThumb({ photo }: { photo: Photo }) {
	const aspect = photo.photo.width / photo.photo.height
	return <div className={`w-full aspect-[${aspect}] block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer`}>
		<a href={getAssetURL(photo.photo.id)}>
			<img
				className='w-full h-full'
				src={getAssetURL(photo.photo.id)} alt={''}		>
			</img>
		</a>

	</div>
}



export function PhotoGallery({ photos }) {
	const [filterCategory, setFilter] = useState(null)

	const filteredPhotos = photos.filter((photo: Photo) => {
		if (filterCategory == null) {
			return true
		}
		return photo.category == filterCategory
	}).map((photo) => (<PhotoThumb key={photo.id} photo={photo} />))

	const breakpointColumnsObj = {
		default: 3,
		768: 2, // 2 columns for screens 768px wide or less
		// You could add more breakpoints here, e.g., 500: 1 for very small screens
	};

	return <div className="flex flex-col items-center px-5">
		<div className="flex flex-row gap-2 mb-10 flex-wrap ">
			<button onClick={() => setFilter(null)} className={"cursor-pointer transition-background rounded-full text-sm hover:bg-white p-2 px-4 font-bold transition-colors " + (filterCategory == null ? 'bg-white' : 'bg-main-100')} >
				All
			</button>
			{Object.keys(PHOTO_CATEGORY_NAME).map((enumKey) => {
				return <button onClick={() => setFilter(enumKey)} className={"cursor-pointer transition-background rounded-full text-sm hover:bg-white p-2 px-4 font-bold transition-colors " + (filterCategory == enumKey ? 'bg-white' : 'bg-main-100')}>
					{PHOTO_CATEGORY_NAME[enumKey]}
				</button>
			})}
		</div>


		<Masonry
			breakpointCols={breakpointColumnsObj}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column">
			{filteredPhotos}
		</Masonry>
	</div>
}