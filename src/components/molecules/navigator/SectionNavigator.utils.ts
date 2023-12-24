import { SetState } from "@/types";
import { Section } from "@/types/portfolio";

export const changeSectionMenu = (pathname: string, setSection: SetState<Section>)=> {
	if(pathname.endsWith('/android-ios')) setSection('Android/iOS');
	if(pathname.endsWith('/web')) setSection('Web');
	if(pathname.endsWith('/illustration')) setSection('Illustration');
	if(pathname.endsWith('/photo')) setSection('Photo');
	if(pathname.endsWith('/Video')) setSection('Video');
};