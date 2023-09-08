import List from "./List";
import ListItem from "./ListItem";

const ListA: List = new List(
  "List A",
  [
    new ListItem("Apples", "Bag of apples", false),
    new ListItem("Apples", "Bag of apples", false),
    new ListItem("Apples", "Bag of apples", false),
    new ListItem("Apples", "Bag of apples", false),
    new ListItem("Apples", "Bag of apples", true),
    new ListItem("Apples", "Bag of apples", false),
    new ListItem("Apples", "Bag of apples", false),
  ],
  true,
);
const ListB: List = new List(
  "List B",
  [new ListItem("Pencils", "A pack of pencils", false)],
  false,
);

export { ListA, ListB };
