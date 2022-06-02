import { OrderedListTypes, UnorderedListTypes } from '../enums/ListTypes';

interface IListProps {
  items: JSX.Element[];
  type: UnorderedListTypes | OrderedListTypes;
}

const List = ({ items, type = UnorderedListTypes.ul }: IListProps) => {
  const ListChildren = () =>
    items.map((item, key) => <li key={key + 'li'}>{item}</li>);
  if (OrderedListTypes[type]) {
    return <ul>{ListChildren()}</ul>;
  }
  return <ol>{ListChildren()}</ol>;
};

export default List;
