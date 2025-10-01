

type BlogType = {
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  tag: string;
}


export const articles: BlogType[] = [{
    title: "How Accra Mapped Its Future Transport Network",
    description: "A deep dive into the planning and execution of Accra's transport network.",
    date: "2023-01-15",
    thumbnail: "/images/accra-transport-network.jpg",
    tag: "Urban Planning"
}
, {
    title: "Sustainable Urban Development in Nairobi",
    description: "Exploring sustainable practices in Nairobi's urban development projects.",
    date: "2023-02-10",
    thumbnail: "/images/nairobi-sustainable-development.jpg",
    tag: "Sustainability"
}
, {
    title: "The Role of Technology in Modern Urban Planning",
    description: "How technology is transforming the way cities are planned and managed.",
    date: "2023-03-05",
    thumbnail: "/images/technology-urban-planning.jpg",
    tag: "Technology"
}
, {
    title: "Community Engagement in Urban Development",
    description: "The importance of involving communities in urban development projects.",
    date: "2023-04-12",
    thumbnail: "/images/community-engagement.jpg",
    tag: "Community"
}
];