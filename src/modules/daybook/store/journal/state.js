export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Minim exercitation ad nulla occaecat eiusmod qui enim amet coluptate incididunt esse. Consequat aute cillum",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Minim exercitation ad nulla occaecat eiusmod qui enim amet coluptate incididunt esse. Consequat aute cillum",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Minim exercitation ad nulla occaecat eiusmod qui enim amet coluptate incididunt esse. Consequat aute cillum",
      picture: null,
    },
  ],
});
