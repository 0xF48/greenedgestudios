import { readItems, readSingleton } from '@directus/sdk';
import { Schema } from './publicEnums';
import { useClient } from './useClient';
import { cache } from 'react';


// Create a cached data fetching function
export const getData = cache(async (): Promise<Schema> => {
	const { client } = useClient()

	const [ge_photos, ge_websites, ge_globals] = await Promise.all([

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
				// The SDK might interpret this as selecting these fields from the related 'photo' item.
			]
		})),
		// If the above still causes issues, the more explicit form for the SDK's deep query might be:
		// { photo: { _fields: ['id', 'width', 'height'] } } or
		// { photo: { fields: ['id', 'width', 'height'] } }
		// Let's stick to the simpler { photo: ['sub_field_1', 'sub_field_2'] } which is often supported.
		// The error "Type '{ photo: string[]; }' is not assignable to type '"*" | keyof Photo'."
		// implies that 'photo' itself is a key, but its value (string[]) is not a valid DeepQuery.
		// A RelationalField<Item> is Partial<Record<keyof Item, DeepQuery<any>>>.
		// DeepQuery<Item> has fields?: (keyof Item | '*' | RelationalField<Item>)[];
		// So, it should be { photo: { fields: ['id', 'width', 'height'] } }
		client.request(readItems('ge_websites', {
			limit: -1,
			// If ge_websites.screenshot also needs dimensions, update similarly:
			// fields: ['id', 'link', { screenshot: ['id', 'width', 'height'] }]
		})),
		client.request(readSingleton('ge_globals'))
	]);


	// console.log(ge_photos)




	return { ge_photos, ge_globals, ge_websites };

});