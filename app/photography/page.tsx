
import React from 'react';
import { getData } from '../getData';
import { getAssetURL } from '../getAssetURL';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { Photo } from '../publicEnums';
import { PhotoGallery } from '../PhotoGallery';



export default async function PhotographyPage() {
	const { ge_photos } = await getData();


	return (
		<div className="px-4 sm:px-6">
			<PhotoGallery photos={ge_photos} />
		</div>




	);
}