import { Dvider, IntroContainer, Introduce } from "./Intro.styled";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Preview from "@/components/preview/Preview";
import { wheelHandler } from "@/utils/wheelHandler";

function Intro(){

	return(
		<IntroContainer ref={(element)=>{
			if(element !== null) {
				element.addEventListener("wheel", (event:WheelEvent)=>{
					wheelHandler(event, element)
				});
			}
		}}>
				<Header/>
				<Introduce>
						<h1>Welcome to Portfolly</h1>
						<h2>클라이언트와 파트너 간 소통해요</h2>
				</Introduce>
				<Dvider/>

				<Preview section='Android/iOS'/>
				<Dvider/>

				<Preview section='Web'/>
				<Dvider/>

				<Preview section='Illustration'/>
				<Dvider/>

				<Preview section='Graphics'/>
				<Dvider/>

				<Preview section='Video'/>
				<Footer/>
		</IntroContainer>
	)
}

export default Intro;