import React from 'react';
import { getData } from '../getData';
import { getAssetURL } from '../getAssetURL';
import Image from 'next/image';
import { Website } from '../publicEnums'


function WebsiteCard({ website }: { website: Website }) {
	const imageUrl = getAssetURL(website.screenshot);

	return (
		<a
			href={website.link}
			target="_blank"
			rel="noopener noreferrer"
			className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
			aria-label={`Visit ${website.link}`}
		>
			<div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-200">
				{imageUrl ? (
					<Image
						src={imageUrl}
						alt={`Screenshot of ${website.link}`}
						layout="fill"
						objectFit="cover" // Or "contain"
					// className="transition-opacity duration-300 ease-in-out"
					// onLoadingComplete={(img) => img.classList.remove('opacity-0')}
					// onError={(e) => console.error('Image failed to load:', imageUrl, e)} // Basic error handling
					/>
				) : (
					<div className="w-full h-full flex items-center justify-center text-gray-500">
						No screenshot available
					</div>
				)}
			</div>
			<div className="p-3 sm:p-4 bg-white">
				<a className="text-xs sm:text-sm text-main-600 hover:underline truncate font-medium block" title={website.link}>
					{website.link.replace(/^https?:\/\//, '')}
				</a>
			</div>
		</a>
	);
}

export default async function WebsitesPage() { // Renamed for clarity, assuming this page is for websites
	const { ge_websites } = await getData();

	if (!ge_websites || ge_websites.length === 0) {
		return <div className="p-4 text-center text-gray-500">No websites to display.</div>;
	}

	const sites = ge_websites.map((website) => ( // Removed index, using website.id for key
		<WebsiteCard key={website.id} website={website} />
	));

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
			{sites}
		</div >
	);
}