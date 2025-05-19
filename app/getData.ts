import { readItems, readSingleton } from '@directus/sdk';
import { Schema } from './publicEnums';
import { useClient } from './useClient';
import { cache } from 'react';


// Create a cached data fetching function
export const getData = cache(async (): Promise<Schema> => {
	const { client } = useClient()

	const [ge_photos, ge_globals] = await Promise.all([
		client.request(readItems('ge_photos', { limit: -1 })),
		client.request(readSingleton('ge_globals'))
	]);

	console.log(ge_photos, ge_globals)


	return { ge_photos, ge_globals };

});