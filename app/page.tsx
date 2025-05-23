import React from 'react';

export default function Home() {
	return <div className='flex items-center justify-center content-center flex-col gap-10'>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/MqHFHz708vY?si=dIva8A4hB8_EKXb2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		<a href='https://www.facebook.com/greenedgestudios' className='bg-blue-500 cursor-pointer ring-3 ring-blue-600 drop-shadow-xl shadow-blue-500 rounded-full p-2 px-5 text-white font-bold hover:bg-blue-600 transition-colors'>facebook page</a>
	</div>


}