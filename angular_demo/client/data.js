module.exports = function () {
  return {
    books: [
      {
        id: 1,
        name: "I, Robot",
        author: "Isaac Asimov",
        published: "1950",
        description:
          "I, Robot is a fixup novel of science fiction short stories or essays by American writer Isaac Asimov. The stories originally appeared in the American magazines Super Science Stories and Astounding Science Fiction between 1940 and 1950 and were then compiled into a book for stand-alone publication by Gnome Press in 1950, in an initial edition of 5,000 copies.",
        price: "22.59"
      },

      {
        id: 2,
        name: "A Study in Scarlet",
        description:
          "The book's title derives from a speech given by Holmes, a consulting detective, to his friend and chronicler Watson on the nature of his work, in which he describes the story's murder investigation",
        author: "Sir Arthur Conan Doyle",
        published: "1960",
        price: 20.12
      },

      {
        id: 3,
        name: "Child Whispers",
        description: "one of Blyton's most popular and best-known poetry books",
        author: "Enid Blyton",
        price: 12.5
      },

      {
        id: 4,
        name: "The Mousetrap",
        description:
          "The play has a twist ending, which the audience are traditionally asked not to reveal after leaving the theatre.",
        author: " Agatha Christie",
        price: 10.95
      },
    ],
    orders: []
  };
};
