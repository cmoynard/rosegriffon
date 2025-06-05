const carouselCards: {
    isImage: boolean;
    imageSrc?: string;
    text?: string;
    blurAmount?: number;
    href?: string;
  }[] = [
    {
      isImage: true,
      imageSrc: "/stand_ie.png",
      text: "Nos futures présences",
      blurAmount: 5,
      href: "/stand",
    },
    {
      isImage: false,
      text: "Slide 2",
    },
    {
      isImage: false,
      text: "Slide 3",
    },
    {
      isImage: false,
      text: "Slide 4",
    },
    {
      isImage: true,
      imageSrc: "/ievr.png",
      text: "Site officiel de Inazuma Eleven: Victory Road",
      blurAmount: 5,
      href: "https://www.inazuma.jp/victory-road/en/",
    },
  ];