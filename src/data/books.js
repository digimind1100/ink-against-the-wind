export const booksData = [
  {
    id: "book1",
    title: "DE SUiKER DiE NiET ZOET WAS",
    cover: "/novel/book1.png",
    description: `De Sugar that wasn’t sweet
A Journey Through the Black Water of the Soul

In this hauntingly beautiful narrative, the author weaves a tapestry that is as much about the geography of the heart as it is about the migration of a people. What begins as a modern, domestic tragedy in The Hague—a quiet, suffocating battle with depression—blossoms into a sweeping historical epic.

The transition to 1873 India is handled with remarkable sensitivity, stripping away the romanticism of the past to reveal the raw, systemic cruelty of British rule.`,
  },

  {
    id: "book2",
    title: "CHINI JO MITHI NA THI",
    cover: "/novel/book2.png",
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