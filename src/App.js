import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Episodes from "./components/Episodes";
import BlockComponent from "./components/BlockComponent";
import block1 from "./imag/block1.svg";
import block2 from "./imag/block2.svg";
import block3 from "./imag/block3.svg";
import Host from "./components/Host";
import FromComponent from "./components/FormComponent";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);

  const scrollToHome = () => {
    if (homeRef.current) {
      window.scrollTo({
        top: homeRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const episodesRef = useRef(null);

  const scrollToEpisodes = () => {
    if (episodesRef.current) {
      window.scrollTo({
        top: episodesRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      window.scrollTo({
        top: footerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="App">
      <Header scrollToEpisodes={scrollToEpisodes} scrollToHome={scrollToHome} scrollToAbout={scrollToAbout} scrollToFooter={scrollToFooter} />
      <div ref={homeRef}>
        <MainContent />
      </div>
      <div ref={episodesRef}>
        <Episodes />
      </div>
      <BlockComponent
        imageSrc={block1}
        num="1"
        title="Should you get outboard audio gear?"
        main="Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up."
      />
      <BlockComponent
        imageSrc={block2}
        num="2"
        title="Mic tricks to take you to the next level"
        main="Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great."
      />
      <BlockComponent
        imageSrc={block3}
        num="3"
        title="The best microphone under $200"
        main="With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks."
      />
      <div ref={aboutRef}>
      <Host />
      </div>
        <FromComponent />

      <div className="review-container_top">
        <Review
          text="I can’t recommend this podcast enough"
          users="Betty Lacey"
        />
        <Review text="Jacob is the best in the business" users="Adam Driver" />
        <Review text="A wealth of audio knowledge" users="Marcus Brown" />
      </div>
      <div className="review-container_buttom">
        <Review text="Every episode is a gem!" users="Jessica Knowl" />
        <Review text="Whoa whoa, let me take some notes!" users="Scott Adams" />
        <Review
          text="I’ve upped my game considerably since I started listening"
          users="Steven Blast"
        />
      </div>
      <div ref={footerRef}>
      <Footer />
      </div>
    </div>
  );
}

export default App;
