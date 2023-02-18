import { IGalleries } from "types/gallery";

const projectGalleries: IGalleries = {
  Installation1: {
    name: "The Green House",
    description: "New Construction, Luxury Condominiums",
    location: "Long Island City",
    date: "December 2022",
    type: "New Installation",
    galleryImages: [
      {
        name: "Image install one",
        src: "projects/sample/1027Jackson001.jpeg",
        caption: "1027 Jackson, luxury condos",
        sort: 4,
      },
      {
        name: "Image install one",
        src: "projects/sample/mizner001.jpeg",
        caption: "Miami, Florida",
        sort: 3,
      },
      {
        name: "Image install one",
        src: "projects/sample/construction2.jpeg",
        caption: "construction 2",
        sort: 2,
      },
      {
        name: "Image install one",
        src: "projects/sample/office-building-1.jpeg",
        caption: "working on something",
        sort: 1,
      },
    ],
  },
  Installation2: {
    name: "10X Living at Mizner",
    description: "We flew to Miami to perform a difficult installation involving an integration with maglocks. The first installer referred the job to us as it was a particularly challenging setup, and we had a brief window in which to operate. In a matter of days we were able to analyze and solve the problems, run hundreds of feet of cable through the overheads and out through the lobbies without leaving a trace. We accomplished all the work and kept the management and staff updated and informed.",
    location: "Miami",
    date: "June 2022",
    type: "Retrofit Installation",
    galleryImages: [
      {
        name: "Image install two",
        src: "projects/sample/mizner001.jpg",
        caption: "working on something",
        sort: 1,
      },
    ],
  },
  Installation3: {
    name: "Allure Apartments",
    description: "We worked hard on this install...",
    location: "Centerville, Ohio",
    date: "December 2022",
    type: "Repair",
    galleryImages: [
      {
        name: "Image install one",
        src: "projects/sample/centerville001.jpg",
        caption: "working on something",
        sort: 1,
      },
    ],
  },
};

export { projectGalleries };
