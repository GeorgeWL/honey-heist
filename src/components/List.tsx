import { OrderedListTypes, UnorderedListTypes } from '../enums/ListTypes';

interface IListProps {
  items: JSX.Element[];
  type: UnorderedListTypes | OrderedListTypes;
}

const ListChildren = (items: JSX.Element[]) =>
  items.map((item, key) => <li key={key + 'li'}>{item}</li>);

const List = ({ items, type = UnorderedListTypes.ul }: IListProps) => {
  if (OrderedListTypes[type]) {
    return <ul>{ListChildren(items)}</ul>;
  }
  return <ol>{ListChildren(items)}</ol>;
};

export default List;
