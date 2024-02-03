import ListItem from "./ListItem";

const ListComponent = ({ items, handleOpenItem }) => {
  return (
    <div className="flex-grow bg-white shadow rounded overflow-hidden w-auto m-5">
      {items.map((item) => (
        <ListItem
          item={item}
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
          handleOpenItem={handleOpenItem}
        />
      ))}
    </div>
  );
};

export default ListComponent;
