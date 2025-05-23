'use client'

import Masonry from "react-masonry-css"
import { Photo } from "./publicEnums"
import { getAssetURL } from "./getAssetURL"




function PhotoThumb({ photo }: { photo: Photo }) {
	console.log(photo)
	const aspect = photo.photo.width / photo.photo.height

	return <div className={`w-full rounded-2xl overflow-hidden aspect-[${aspect}]`}>
		<img
			className='w-full h-full'
			src={getAssetURL(photo.photo.id)} alt={''}		>
		</img>
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