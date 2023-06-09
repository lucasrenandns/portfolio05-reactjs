import { About, AboutImage, Image,
AboutText, H2, H3, Paragraph, Btn } from "./styled";
import aboutImage from "../../assets/about.jpg"
import { useEffect } from "react";

export default function about() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "40px",
            duration: 2300,
            reset: true
        })

        sr.reveal(".about", {delay: 200, origin: "bottom"})
    }, [])

    return(
        <About className="about" id="about">
            <AboutImage>
                <Image src={aboutImage} alt="About"/>
            </AboutImage>

            <AboutText>
                <H2>About me</H2>
                <H3>Developer <span>& Designer</span></H3>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat adipisci libero nulla dolorum distinctio praesentium et quidem, incidunt eaque, obcaecati ex molestiae, provident aut veritatis! Voluptatum nostrum eveniet accusantium iste?</Paragraph>
                <Btn href="#" className="btn">Download CV</Btn>
            </AboutText>
        </About>
    )
}