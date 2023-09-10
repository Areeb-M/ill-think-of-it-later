import List from './List';
import ListItem from './ListItem';

const ListA: List = new List('List A', true, [
  new ListItem('Apples', 'Bag of apples', false),
  new ListItem('Apples', 'Bag of apples', false),
  new ListItem('Apples', 'Bag of apples', false),
  new ListItem('Apples', 'Bag of apples', false),
  new ListItem('Apples', 'Bag of apples', true),
  new ListItem('Apples', 'Bag of apples', false),
  new ListItem('Apples', 'Bag of apples', false),
]);
const ListB: List = new List('List B', false, [
  new ListItem('Pencils', 'A pack of pencils', false),
]);

function genList() {
  return new List(ListA.name, ListB.active, ListA.items.slice());
}

export {genList};
