import {
  Carousel,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap';
import React from 'react';

const carouselRotationTimeout = 3000;

class HeroCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    const items = [];
    this.props.carousel.map((currentSet, index) => {
      currentSet.id = index;
      items.push(currentSet);
    });
    this.items = items;
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;
    

    const slides = this.items.map((item) => {
      return (
        <CarouselItem tag='div' key={item.id} onExiting={this.onExiting} onExited={this.onExited}>
          <img src={require(`../images/${this.props.imgDir}/${item.src}`)} alt={this.props.imgAlt} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={carouselRotationTimeout}
          pause={false}
          className='hero-carousel'
        >
          <CarouselIndicators items={this.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
        </Carousel>
        <style global jsx>{`
          .carousel {
            height: 100vh; 
            width: 100vw;
            margin-bottom: 4px;
          }
          .carousel-inner, .carousel-item {
            height: 100%;
          }
          .carousel-item {
            background-color: black;
          }
          .carousel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .carousel-indicators, .carousel-control-next, .carousel-control-prev {
            z-index: 100 !important; // Make control on top of all
          }
        `}</style>
      </div>
    );
  }

  componentDidMount() {
    updateHeroHeight();
    window.addEventListener('resize', updateHeroHeight);
    // Fix for image carousel not starting
    const next = this.next;
    setTimeout(() => {
      next();
    }, carouselRotationTimeout);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', updateHeroHeight);
  }
}

function updateHeroHeight() {
  console.log('width', window.innerWidth);
  const carousel = document.getElementsByClassName('hero-carousel')[0];
  const heading = document.getElementsByClassName('heading-container')[0];
  const tab = document.getElementById('heading-tab');
  if (window.innerWidth < 768) {
    if (carousel.style.height) {
      const currentHeight = carousel.clientHeight;
      const viewHeight = window.innerHeight;
      const diff = Math.abs(viewHeight - currentHeight);
      console.log(diff);
      if (diff > 100) {
        carousel.style.height = `${viewHeight}px`;
        if (heading) heading.style.height = `${viewHeight}px`;
        if (tab) tab.style.top = `${viewHeight * 0.75}px`;
      }
      console.log(currentHeight);
      console.log(viewHeight);
    } else {
      const viewHeight = window.innerHeight;
      carousel.style.height = `${viewHeight}px`;
      if (heading) heading.style.height = `${viewHeight}px`;
      if (tab) tab.style.top = `${viewHeight * 0.75}px`;
    }
  } else {
    carousel.style.height = '';
    if (heading) heading.style.height = '';
    if (tab) tab.style.top = '';
  }
}

export default HeroCarousel




