//Imports de ReactStrap
import { Container } from "reactstrap";
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

//Vínculo css
import "../Styles/PrinCont.css";

//Imágenes del caroussel
import Promo1 from "../Assets/CarousselPromos/Promo1.jpg"
import Promo2 from "../Assets/CarousselPromos/Promo2.jpg"
import Promo3 from "../Assets/CarousselPromos/Promo3.jpg"

const items = [
  {
    src: Promo1,
    key: 1,
    
  },
  {
    src: Promo2,
    key: 2,
  },
  {
    src: Promo3,
    key: 3,
  },
];

function PrinCont(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="imgCarousel"/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Container className="CarCont">
    <Carousel className="Carousel"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </Container>
  );
}

export default PrinCont;