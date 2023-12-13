import Header from "@/components/header/Header";
import Introduce from "@/components/intro/Introduce";
import Footer from "@/components/footer/Footer";

function Intro(){
    return(
        <>
        <Header/>
        <Introduce/>
        {/* <Preview section='APP'/>
        <Preview section='WEB'/>
        <Preview section='ILLUSTRATION'/>
        <Preview section='GRAPHIC'/>
        <Preview section='VIDEO'/> */}
        <Footer/>
        </>
    )
}

export default Intro;