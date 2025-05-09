import "./Rafw.css";
import Display from "../common/Display.jsx";
import DisplayVideo from "../common/DisplayVideo.jsx"; // Add this import
import Text from "../common/Text.jsx";
import Section from "../common/Section.jsx";
import RowDisplay from "../common/RowDisplay.jsx";
import RowDisplayRafw from "../common/RowDisplayRafw.jsx";
import Separator from "../common/Separator.jsx";
import Title from "../common/Title.jsx";
import PageHeader from "../common/PageHeader.jsx";
import PageBreadcrumbs from "./PageBreadcrumbsrafw.jsx";

import ProjectTag from "./ProjectTagRafw.jsx";
import MainText from "./MainText.jsx";
import Idea from "./Idea.jsx";
import Slider from "./Slider.jsx";
import MoreProjects from "./MoreProjects.jsx";
import PageFooter from "./PageFooter.jsx";
import Video from "./Video.jsx";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import GridDistortion from "../common/GridDistortion.jsx";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Solit = () => {
  const imageTimeline = useRef();
  const container = useRef();

  useGSAP(() => {
    let images = container.current.querySelectorAll(".solit-el-1");

    images.forEach((image) => {
      gsap.to(image, {
        scrollTrigger: {
          trigger: image,
          // markers: true,
        },
        opacity: 1,
        scale: 1,
        duration: 1,
      });
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  });

  return (
    <>
      <PageHeader />
      <div ref={container} className="w-full overflow-hidden bg-black">
        <div className="absolute top-0 left-0 z-0 h-[80vh] w-full sm:h-[80vh] md:h-[50vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh]">
          <div className="absolute inset-0 opacity-100">
            <GridDistortion
              // imageSrc="https://picsum.photos/1920/1080?grayscale"
              imageSrc="solit/griddistortion.jpg"
              grid={10}
              mouse={0.15}
              strength={0.15}
              relaxation={0.9}
              className="pointer-events-auto"
            />
          </div>
        </div>

        {/* First container */}
        <div className="pointer-events-none z-50 container mx-auto flex flex-col items-center gap-y-8 p-8 md:gap-y-0 lg:gap-y-16 lg:px-10 lg:py-16 lg:pb-12 xl:gap-y-28 xl:pb-32 2xl:gap-y-20">
          <PageBreadcrumbs />

          <ProjectTag />

          <Display>
            <div
              id="main-image-rafw"
              className="pointer-events-none h-full w-full object-cover"
            ></div>
          </Display>
        </div>

        <div className="z-1000 container mx-auto flex flex-col items-center gap-y-8 p-8 md:gap-y-12 lg:gap-y-16 lg:px-0 lg:py-16 lg:pb-12 xl:gap-y-28 xl:pb-32 2xl:gap-y-32">
          <MainText />

          <Display>
            <div className="solit-el-1 z-1000 h-full w-full">
              <Video />
            </div>
          </Display>

          <Section
            title={{
              content: "Challenge",
              size: "md",
              color: "#ffffff",
            }}
            text="We promoted Solit Hub's location in the quieter subur ob Littau, Luzern through creative visuals, engaging the young demographic, and showcasting Littau as part of Luzern to enhance brand awareness in a competitive co-working space market."
            expanded={false}
            textColor="white"
          />

          <Section
            title={{
              content: "Results",
              size: "md",
              color: "#ffffff",
            }}
            text="We improved the brand's digital presence through an integrated approach, including targeted social media campaigns and engaging video content. This resonated well with young, creative businesses, resulting in positive client feedback. The project demonstrates the impact of a well-crafted digital strategy on a brand's image and market position."
            expanded={false}
            textColor="white"
          />
        </div>
        <div className="container-full z-2000 mx-auto flex flex-col items-center">
          <Idea />
        </div>

        {/* Second container */}
        <div className="container mx-auto flex flex-col items-center gap-y-8 p-8 md:gap-y-12 lg:gap-y-16 lg:px-0 lg:py-16 lg:pb-12 xl:gap-y-30 xl:pb-32 2xl:pt-40">
          <Section
            title={{
              content: "Idea to creation",
              size: "md",
              color: "#ffffff",
            }}
            text="We created a 20-second brand awareness video, designed to be easily adaptable for social media platforms. The video effectively encapsulates Solit Hub’s brand message and identity, making it a versatile tool for Various digital channels. The brand identity reflects the slogan ‘Create at Solit, Thrive in Luzern’."
            expanded={false}
            textColor="white"
          />

          {/* Slider */}
          <DisplayVideo>
            <Slider />
          </DisplayVideo>

          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:gap-16 xl:gap-16">
            {/* Image1 */}

            {/* Image2 */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-[4/5] xl:aspect-[4/5]">
              <div className="h-full border bg-[#c09c45] p-20">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="top-0 left-0 w-auto rounded-3xl"
                  src="rafw/menu.mp4"
                  type="video/mp4"
                ></video>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-[4/5] xl:aspect-[4/5]">
              <img
                src="rafw/phone.png"
                className="object-fit absolute top-0 left-0 h-full w-full"
              />
            </div>
          </div>

          <Section
            className="text-white"
            title={{
              content: "How FaceCraft transformed online presence.",
              size: "md",
              color: "#ffffff",
            }}
            text="To boost engagement and create a fresh, youthful brand character, we produced six short video posts for social media. These videos featured people answering questions about what Solit means to them, adding an element of fun and personal connection to the brand. This approach not only heightens engagement but also aligns perfectly with the target market of young creative businesses."
            textColor="white"
          />
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:gap-16 xl:gap-16">
            {/* Image1 */}

            {/* Image2 */}
            <div className="relative aspect-[4/5] h-[880px] w-full overflow-hidden rounded-2xl lg:aspect-[4/5] xl:aspect-[4/5]">
              <div className="">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="top-0 left-0 w-auto rounded-3xl"
                  src="rafw/phone-video.mp4"
                  type="video/mp4"
                ></video>
              </div>
            </div>
            
          </div>

         

         

          <Display>
            <img
              src="solit/overlay.jpg"
              className="solit-el-1 absolute top-0 left-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 z-50 flex flex-col items-center justify-between p-8 md:p-20 lg:items-start lg:justify-center lg:p-16 xl:p-24">
              <h3 className="Futura-PT-Bold text-center text-5xl text-white md:text-6xl lg:text-left lg:text-8xl xl:w-2/3 xl:text-9xl 2xl:text-9xl">
                Are you ready to transform your brand?
              </h3>

              <h4 className="text-customred sm:text-[30px] md:text-[30px] lg:absolute lg:right-16 lg:bottom-40 lg:text-[30px] xl:right-24 xl:bottom-24 xl:text-[30px] 2xl:text-[30px]">
                Let’s work together
              </h4>
            </div>
          </Display>

          <Title content="Explore more projects" size="md" centered />

          <MoreProjects />
        </div>
      </div>

      <PageFooter />
    </>
  );
};

export default Solit;
