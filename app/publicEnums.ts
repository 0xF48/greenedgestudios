export type AssetLink = string

export const navOptions = [
	{
		label: 'home',
		href: '/'
	},
	{
		label: 'video production',
		href: '/video'
	},
	{
		label: 'photography',
		href: '/photography'
	},
	{
		label: 'websites',
		href: '/websites'
	},
	{
		label: 'testimonials',
		href: '/testimonials'
	},

]

const enum PHOTO_CATEGORY {
	HOTEL = 1,
	REAL_ESTATE = 2,
	PRODUCT = 3,
	PORTRAIT = 4,
	NATURE = 5,
	EVENT = 6
}

export const PHOTO_CATEGORY_NAME = {
	[PHOTO_CATEGORY.HOTEL]: 'Hotels',
	[PHOTO_CATEGORY.REAL_ESTATE]: 'Real Estate',
	[PHOTO_CATEGORY.PRODUCT]: 'Product',
	[PHOTO_CATEGORY.NATURE]: 'Nature',
	[PHOTO_CATEGORY.EVENT]: 'Event'
}

export type Photo = {
	id: number
	photo: string
	category: PHOTO_CATEGORY

}

export type Globals = {
	logo: AssetLink;
	company_name: string;
	company_description: string;
	testimonials_page_content: string;
	production_page_content: string;
	about_page_content: string;
}

export type Schema = {
	// Define your collections and their types
	ge_globals: Globals
	ge_photos: Photo[]
}




export const enum GLOBAL {
	DIRECTUS_API = "http://admin.lerp.com:3001/",
}