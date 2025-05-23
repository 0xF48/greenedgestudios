'use client'

import Masonry from "react-masonry-css"
import { Photo } from "./publicEnums"
import { getAssetURL } from "./getAssetURL"




function PhotoThumb({ photo }: { photo: Photo }) {
	console.log(photo)
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
	return <Masonry
		breakpointCols={3}
		className="my-masonry-grid"
		columnClassName="my-masonry-grid_column">
		{photos.map((photo) => (<PhotoThumb key={photo.id} photo={photo} />))}
	</Masonry>
}