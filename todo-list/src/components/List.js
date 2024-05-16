import React from 'react';

const List = ({ items, removeItem, editItem }) => {
  if (!items) return null;
  
  return (
    <div>
      {items.map((item) => {
        if (!item || !item.id) return null;
        const { id, title } = item;
        return (
          <div key={id} className="grocery-item">
            <p>{title}</p>
            <button className='edit-btn' onClick={() => editItem(id)}>
            Edit
            </button>
            <button className='delete-btn' onClick={() => removeItem(id)}>
            Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;


