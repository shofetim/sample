import { Hello } from "../index.mjs";

o.spec("Index", () => {

  o("Hello", () => {
    o(m(Hello).tag.view().tag).equals("h1");
  });

});
