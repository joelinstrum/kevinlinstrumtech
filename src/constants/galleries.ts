import { IGalleries } from "types/gallery";

const projectGalleries: IGalleries = {
  Installation1: {
    name: "Installation Fee",
    description: "We worked hard on this install...",
    location: "Manhatten",
    date: "July 2022",
    type: "Installation",
    galleryImages: [
      {
        name: "Image install one",
        src: "projects/sample/apartment-building.jpeg",
        caption: "apartment building, sample image",
        sort: 4,
      },
      {
        name: "Image install one",
        src: "projects/sample/construction1.jpeg",
        caption: "construction sample 1",
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
    name: "Installation Two",
    description: "We worked hard on this install...",
    location: "Brooklyn",
    date: "December 2022",
    type: "Maintenance",
    galleryImages: [
      {
        name: "Image install one",
        src: "projects/sample/construction2.jpeg",
        caption: "working on something",
        sort: 1,
      },
    ],
  },
  Installation3: {
    name: "Installation Two",
    description: "We worked hard on this install...",
    location: "Brooklyn",
    date: "December 2022",
    type: "Repair",
    galleryImages: [
      {
        name: "Image install one",
        src: "projects/sample/retrofit-intercom-system-installer.jpeg",
        caption: "working on something",
        sort: 1,
      },
    ],
  },
};

export { projectGalleries };
