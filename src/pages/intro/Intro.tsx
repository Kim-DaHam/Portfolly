import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Preview from "@/components/preview/Preview";
import { IntroContainer, Introduce } from "./Intro.styled";

function Intro(){
    return(
        <IntroContainer>
            <Header/>
            <Introduce>
                <h1>Welcome to Portfolly</h1>
                <h2>클라이언트와 파트너 간 소통해요</h2>
            </Introduce>
            <Preview section='Android/iOS'/>
            <Preview section='Web'/>
            <Preview section='Illustration'/>
            <Preview section='Graphics'/>
            <Preview section='Video'/>
            <Footer/>
        </IntroContainer>
    )
}

export default Intro;