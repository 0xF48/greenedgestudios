import React from 'react';
import { getData } from '../getData';
import { getAssetURL } from '../getAssetURL';
import Image from 'next/image';






export default async function VideoProductionPage() {
	const { ge_globals } = await getData();


	return (
		<div className='p-4 prose lg:prose-xl max-w-none' dangerouslySetInnerHTML={{ __html: ge_globals.production_page_content }} />
	);
}