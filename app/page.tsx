import React from 'react';

export default function Home() {
	return <div className='flex items-center justify-center content-center flex-col gap-10 px-4 sm:px-6'>
		<div className="w-full max-w-4xl aspect-video">
			<iframe 
				className="w-full h-full rounded-lg border-0" 
				src="https://www.youtube.com/embed/MqHFHz708vY?si=dIva8A4hB8_EKXb2" 
				title="YouTube video player" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
				referrerPolicy="strict-origin-when-cross-origin" 
				allowFullScreen
			></iframe>
		</div>
		<a href='https://www.facebook.com/greenedgestudios' className='bg-blue-500 cursor-pointer ring-3 ring-blue-600 drop-shadow-xl shadow-blue-500 rounded-full p-3 px-6 text-white font-bold hover:bg-blue-600 transition-colors text-sm sm:text-base'>facebook page</a>
	</div>


}