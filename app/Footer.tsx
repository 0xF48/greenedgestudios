"use client";
import Link from "next/link";
import { GLOBAL, navOptions } from "./publicEnums";
import { useNav } from "./useNav";
import { PencilIcon } from "lucide-react";
import { getAssetURL } from "./getAssetURL";


import cn from "classnames"
export function Footer() {
	const { currentOption } = useNav()

	return < footer className="p-4 text-center min-h-[10rem] font-mono text-sm text-main-800" >
		<div className="flex flex-row justify-center mt-10">
			{navOptions.map((option, i) => (
				<div key={option.href}>
					<Link href={option.href} className={cn("mx-2", currentOption.href == option.href ? 'text-black' : "text-main-400")}>{option.label}</Link>
					{i < navOptions.length - 1 ? <span className="text-main-300">/</span> : null}
				</div>
			))}
		</div>
		<div className="pt-10 flex w-full items-center justify-center flex-col">


			<a href={GLOBAL.DIRECTUS_API} target="_blank" rel="noreferrer" className=" mb-8 p-2 px-5 flex items-center justify-center hover:bg-main-200/50 group rounded-xl ">
				<PencilIcon className="text-main-300  group-hover:text-black" width={16} strokeWidth={2}></PencilIcon>
			</a>
			<div className="w-fit flex flex-row items-center justify-center text-main-300">
				designed by <a href='https://yruy.lerp.io'><img src={getAssetURL('64fd2314-6618-4446-9546-4087e55e4a26')} className="w-6 ml-4"></img></a>
			</div>

		</div>
	</footer >
}