import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "components/misc/Headings";
import { useParams } from "react-router-dom";
const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;


const Blog = ({data}) =>  {
  const params = useParams();
  let post = data.filter(data => data.id==params.id)
  console.log(post[0].attributes.blogTitle)
  
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
        
            
              <HeadingRow>
                <Heading>{post[0].attributes.blogTitle}</Heading>
              </HeadingRow>
              
              <h1>{post[0].attributes.blogContent}</h1>
          
      
          
          
          
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};


 
 

export default Blog