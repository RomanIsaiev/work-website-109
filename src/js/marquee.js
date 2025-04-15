import InfiniteMarquee from 'vanilla-infinite-marquee';

new InfiniteMarquee({
  element: '.marquee-container',
  speed: 50000,
  smoothEdges: false,
  direction: 'left',
  fullContainer: false,
  spaceBetween: '64px',
  duplicateCount: 2,
  mobileSettings: {
    spaceBetween: '50px',
  },
});

new InfiniteMarquee({
  element: '.marquee-container-second',
  speed: 50000,
  smoothEdges: false,
  direction: 'right',
  fullContainer: false,
  spaceBetween: '50px',
  duplicateCount: 2,
  mobileSettings: {
    spaceBetween: '64px',
  },
});
