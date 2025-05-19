import React from 'react';
import { getData } from '../getData';
import { getAssetURL } from '../getAssetURL';
import Image from 'next/image';






export default async function PhotographyPage() {
	const { ge_photos } = await getData();

	// A simple way to create columns for masonry layout
	const numColumns = 3; // Adjust as needed
	const columns: any[][] = Array.from({ length: numColumns }, () => []);
	ge_photos.forEach((photo, index) => {
		columns[index % numColumns].push(photo);
	});

	return (
		<div className='p-4'>
			<div className='flex flex-row gap-4'>
				{columns.map((column, colIndex) => (
					<div key={colIndex} className='flex flex-col gap-4 w-full'>
						{column.map((photo: any) => (
							<div key={photo.id} className='break-inside-avoid'>
								<Image
									src={getAssetURL(photo.image)}
									alt={photo.alt_text || 'Photograph'}
									width={photo.width || 500} // Provide a default or ensure width/height are in your data
									height={photo.height || 500} // Provide a default or ensure width/height are in your data
									className='w-full h-auto rounded-lg shadow-md'
									priority={colIndex === 0 && column.indexOf(photo) < 2} // Prioritize loading for first few images in first column
								/>
								{photo.caption && <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>{photo.caption}</p>}
							</div>
						))}
					</div>
				))}
			</div>
		</div >
	);
}