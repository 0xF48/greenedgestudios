import { readItems, readSingleton } from '@directus/sdk';
import { Schema } from './publicEnums';
import { useClient } from './useClient';
import { cache } from 'react';


// Create a cached data fetching function
export const getData = cache(async (): Promise<Schema> => {
	const { client } = useClient()

	let [ge_photos, ge_websites, ge_globals] = await Promise.all([

		client.request(readItems('ge_photos', {
			limit: -1,
			fields: [
				'id',
				'category',
				'photo',
				//@ts-ignore
				'photo.id',
				//@ts-ignore
				'photo.width',
				//@ts-ignore
				'photo.height',
			]
		})),

		client.request(readItems('ge_websites', {
			limit: -1,
		})),
		client.request(readSingleton('ge_globals'))
	]);

	ge_photos = ge_photos.filter((photo) => {
		return photo.photo != null
	})

	// console.log(ge_photos)




	return { ge_photos, ge_globals, ge_websites };

});