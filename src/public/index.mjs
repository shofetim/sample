const Hello = {
  view() {
    return m("h1", "Hello World");
  }
}
const main = () => {
  m.route.prefix = "";
  m.route(document.body, "/", {
    "/": { render: () =>  m(Hello) },
  });
};


export { Hello, main };
