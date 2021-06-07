import o from "ospec";
import { range } from "../src/util.mjs";

o.spec("Util", () => {

  o("range", () => {
    o(range(1)).deepEquals([0]);
    o(range(1, 1)).deepEquals([]);
    o(range(10)).deepEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    o(range(3, 6)).deepEquals([3, 4, 5]);
  });

});
