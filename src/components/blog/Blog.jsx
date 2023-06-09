import { Blog, Heading, BlogContent, 
BlogBox, Image, H6, Btn } from "./styled";
import blogImage1 from "../../assets/blog1.jpg"
import blogImage2 from "../../assets/blog2.jpg"
import blogImage3 from "../../assets/blog3.jpg"
import { useEffect } from "react";

export default function blog() {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "40px",
            duration: 2300,
            reset: true
        })

        sr.reveal(".blog", {delay: 200, origin: "bottom"})
    }, [])

    return(
        <Blog className="blog" id="blog">
            <Heading className="heading">
                <span>Creative blog</span>
                <h2>New insight</h2>
                <p>Experience that keep your customers coming back for more information about <br /> services makes best effort</p>
            </Heading>

            <BlogContent>
                <BlogBox>
                    <Image src={blogImage1} alt="Blog 1"/>
                    <H6>12 Apr 2023</H6>
                    <h5>Getting started with business level improved</h5>
                    <Btn href="#">Read more</Btn>
                </BlogBox>

                <BlogBox>
                    <Image src={blogImage2} alt="Blog 2"/>
                    <H6>12 Apr 2023</H6>
                    <h5>Getting started with business level improved</h5>
                    <Btn href="#">Read more</Btn>
                </BlogBox>

                <BlogBox>
                    <Image src={blogImage3} alt="Blog 3"/>
                    <H6>12 Apr 2023</H6>
                    <h5>Getting started with business level improved</h5>
                    <Btn href="#">Read more</Btn>
                </BlogBox>
            </BlogContent>
        </Blog>
    )
}