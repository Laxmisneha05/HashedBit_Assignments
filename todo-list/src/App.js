import React, { useState, useEffect } from 'react';
import List from './components/List';
import Alert from './components/Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please Enter Value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item && item.id === editID) { 
            return {...item, title: name};
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setEditing(false);
      showAlert(true, "success", "Value Changed");
    } else {
      showAlert(true, "success", "Item Added to the List");
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item Removed");
    setList(list.filter((item) => item && item.id !== id)); 
  };
  
  const editItem = (id) => {
    const editItem = list.find((item) => item && item.id === id);
    if (!editItem) {
      console.error(`Item with id ${id} not found`);
      return;
    }
    setEditing(true);
    setEditID(id);
    setName(editItem.title);
  };
  

  const clearList = () => {
    showAlert(true, 'danger', 'Empty List');
    setList([]);
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          Todo List - List all your Important Tasks Here..
        </h3>
        <div className='mb-3 form'>
          <input
            type="text"
            className='form-control'
            placeholder='Eg. Complete Project Document'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit" className='btn btn-success'>
            {isEditing ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <div className='text-center'>
            <button className='btn btn-warning' onClick={clearList}>
              Clear Items
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default App;
