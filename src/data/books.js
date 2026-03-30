const base = import.meta.env.BASE_URL;

export const booksData = [
  {
  id: "book1",
  title: "DE SUiKER DiE NIET ZOET WAS",
  cover: `${import.meta.env.BASE_URL}novel/book1.png`,
  
  heading: "De Sugar that wasn’t sweet",
  
  description: `A Journey Through the Black Water of the Soul

In this hauntingly beautiful narrative, the author weaves a tapestry...`
},

  {
    id: "book2",
    title: "CHINI JO MITHI NA THI",
    cover: `${import.meta.env.BASE_URL}novel/book2.png`,
    description: `This is another book full description. Replace with your real content later. It can be multiple paragraphs.`,
  },

  {
    id: "book3",
    title: "CHINI JO MITHI NA THI",
    cover: `${import.meta.env.BASE_URL}novel/book3.png`,
    description: `This is another book full description. Replace with your real content later. It can be multiple paragraphs.`,
  },

  {
    id: "book4",
    title: "CHINI JO MITHI NA THI",
    cover: `${import.meta.env.BASE_URL}novel/book4.png`,
    description: `This is another book full description. Replace with your real content later. It can be multiple paragraphs.`,
  },

  {
    id: "book5",
    title: "CHINI JO MITHI NA THI",
    cover: `${import.meta.env.BASE_URL}novel/book5.png`,
    description: `This is another book full description. Replace with your real content later. It can be multiple paragraphs.`,
  },

  {
    id: "book6",
    title: "CHINI JO MITHI NA THI",
    cover: `${import.meta.env.BASE_URL}novel/book6.png`,
    description: `This is another book full description. Replace with your real content later. It can be multiple paragraphs.`,
  },

  // add others same way...
];

export const getExcerpt = (text, length = 120) => {
  if (!text) return "";

  return text.length > length
    ? text.substring(0, text.lastIndexOf(" ", length)) + "..."
    : text;
};