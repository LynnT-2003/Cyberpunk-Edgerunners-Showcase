import { HeroParallax } from "@/components/ui/hero-parallax";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "@/components/ui/text-reveal-card";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Grid } from '@mui/material';
import { CardStack } from "@/components/ui/card-stack";
import { Spotlight } from "@/components/ui/spotlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { CanvasRevealEffectDemo3 } from "@/components/ui/canvas-reveal-effect-section";
import { CanvasRevealEffectDemo } from "@/components/ui/canvas-reveal-effect-demo";

export default function Home() {

  const quotes = [
    {
      id: 1,
      name: 'David Martinez',
      designation: '',
      content: 'No Kid From Santo Will Ever Be A Suit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      designation: 'UX Designer',
      content: 'I aint worth it Lucy. Besides you, I got nothing left. But you still have a dream to stick around for. I need you to see it through. Thats my dream. Honestly, nothing else ever really mattered.',
    },
    // Add more Card objects as needed
  ];
  
  const dummyProducts = [
    { title: "Product 1", link: "/product1", thumbnail: "/lucy-smoke-1.webp" },
    { title: "Product 2", link: "/product2", thumbnail: "/lucy-rocket.gif" },
    { title: "Product 3", link: "/product3", thumbnail: "/lucy-smoke-1.webp" },
    { title: "Product 4", link: "/product4", thumbnail: "/lucy-light-up.gif" },
    { title: "Product 5", link: "/product5", thumbnail: "/lucy-rocket.gif" },
    { title: "Product 6", link: "/product6", thumbnail: "/lucy-hug.gif" },
    { title: "Product 7", link: "/product7", thumbnail: "/lucy-jacket.gif" },
    { title: "Product 8", link: "/product8", thumbnail: "/david-lucy.gif" },
    { title: "Product 9", link: "/product9", thumbnail: "/lucy-david-ending.gif" },
    { title: "Product 10", link: "/product10", thumbnail: "/david-doc.gif" },
    { title: "Product 11", link: "/product11", thumbnail: "/lucy-david-ending.gif" },
    { title: "Product 12", link: "/product12", thumbnail: "/lucy-moon-ending.gif" },
    { title: "Product 13", link: "/product13", thumbnail: "/moon-main.gif" },
    { title: "Product 14", link: "/product14", thumbnail: "/lucy-moon-smile.gif" },
    { title: "Product 15", link: "/product15", thumbnail: "/the-end.gif" },
  ];

  return (
    <>
    <HeroParallax products={dummyProducts}/>
    
    <CanvasRevealEffectDemo3 />

    <CanvasRevealEffectDemo />

    <MacbookScroll
      src="/lucy-edit.gif"
      title="Lucy, the star of our show."
    />

    <HeroHighlight className="mt-0">
      <ContainerScroll titleComponent={undefined}>
        <img
          src={"/moon.gif"}
          alt="Cyberpunk Edgerunners"
          className="h-full"
        />
      </ContainerScroll>
    </HeroHighlight>

    <HeroHighlight>
      <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mt-10">
        A happy ending? For folks like us? 
      </h1>
      <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-slate-900 mt-5">
        <Highlight className="text-white-500">Wrong city. Wrong people.</Highlight>
      </h1>
      <div className="flex items-center justify-center mb-20">
        <TextRevealCard
          text="I aint worth it Lucy."
          revealText="All I wanted was for you to live."
          className="w-[60rem] mt-20"
        >
          <TextRevealCardTitle className="text-3xl w-[80rem]">Welcome to Night City</TextRevealCardTitle>
          <TextRevealCardDescription className="text-xl mt-6">
            A modern multicultural metropolis, a promised city of dreams where no one gets what they deserve. Cyberpunk was never about saving the world, it’s about saving yourself.
          </TextRevealCardDescription>
          <TextRevealCardDescription className="text-xl mt-4">
          &nbsp;- "Give up while you're ahead choom."
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </HeroHighlight>

    <div className="mb-6 ml-48">
      <InfiniteMovingCards 
          items={[
            {
              quote: "I'll Take You To The Moon! I Promise!",
              name: "David Martinez,",
              title: "Arasaka Dropout",
            },
            {
              quote: "Hold on to your wishes if you can’t hold on to me.",
              name: "Lucy,",
              title: "Netrunner",
            },
            {
              quote: "My son at Arasaka Tower Top floor! I can just see it.",
              name: "Gloria Martinez,",
              title: "Emergency Medical Technician",
            },
            {
              quote: "Just another tale for another dreamer.",
              name: "Doc,",
              title: "Ripper",
            },
            {
              quote: "Sorry, wish we couldn't go to the moon together.",
              name: "David Martinez,",
              title: "Cyberpunk",
            },
          ]}
          direction="left" // Optional: Specify the animation direction
          speed="normal" // Optional: Specify the animation speed
          pauseOnHover={true} // Optional: Pause animation on hover
      />
    </div>
    </>
  );
}
