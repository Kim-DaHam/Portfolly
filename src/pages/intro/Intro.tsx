import { Divider, IntroLayout, Introduce } from "./Intro.styled";

import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import Preview from "@/components/organisms/preview/Preview";
import { wheelHandler } from "@/utils/wheelHandler";

function Intro(){
	return(
		<IntroLayout ref={(element)=>{
			if(element !== null) {
				element.addEventListener("wheel", (event:WheelEvent)=>{
					wheelHandler(event, element)
				});
			}}}
		>
			<Header/>
			<Introduce>
					<h1>Welcome to Portfolly</h1>
					<h2>클라이언트와 파트너 간 소통해요</h2>
			</Introduce>
			<Divider/>

			<Preview section='Android/iOS'/>
			<Divider/>

			<Preview section='Web'/>
			<Divider/>

			<Preview section='Illustration'/>
			<Divider/>

			<Preview section='Photo'/>
			<Divider/>

			<Preview section='Video'/>
			<Footer/>
		</IntroLayout>
	)
}

export default Intro;