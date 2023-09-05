import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.jsx';
import List from '../List/list.jsx';
import { v4 as uuid } from 'uuid';
import { SettingContext } from '../../context/Settings/settings.jsx';
import PaginationSettings from '../pagination/pagination.jsx';
import {When} from 'react-if';
import {LoginContext} from '../auth/context.jsx'
import Auth from '../auth/auth.jsx';
import "../../app.css"

const ToDo = () => {


  const settings = useContext(SettingContext);
  const [defaultValues] = useState({
    difficulty: 4,
  });
  // const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });
// console.log(currentPage)

const login= useContext(LoginContext)

    function addItem(item) {
    item.id = uuid();
    item.complete = false;
    const updatedList = [...list, item];
    setList(updatedList);
    localStorage.setItem("items", JSON.stringify(updatedList));

  }

// useEffect(()=>{
//   const arr= JSON.stringify(list)
//     localStorage.setItem("listData", arr)
//     console.log(settings)
// },[list])


  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
    localStorage.setItem("items", JSON.stringify(items));
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
    localStorage.setItem("items", JSON.stringify(items));
  }

  
  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);


  // const filteredList = !settings.complete
  //   ? settings.todos.filter((item) => !item.complete)
  //   : settings.todos;

  const filteredList = !settings.complete
    ? list.filter((item) => !item.complete)
    : list;
    
  const paginatedList = filteredList.slice(
    (currentPage - 1) * settings.maxItemsPerPage,
    currentPage * settings.maxItemsPerPage
  );
  console.log((currentPage - 1) * settings.maxItemsPerPage)
  console.log(  currentPage * settings.maxItemsPerPage)
// useEffect(()=>{

  // },
  // [currentPage])
  

  return (
    <>
    
      <div className="ToDo">
        <When condition={login.loggedIn}> 
        <h1>To Do List: {incomplete} items pending</h1>

       
        <form onSubmit={handleSubmit}>
          <h2>Add To Do Item</h2>
          <Auth capability="create" >
          <label>
            <span>To Do Item</span>
            <input
              onChange={handleChange}
              name="text"
              type="text"
              placeholder="Item Details"
            />
          </label>
          <label>
            <span>Assigned To</span>
            <input
              onChange={handleChange}
              name="assignee"
              type="text"
              placeholder="Assignee Name"
            />
          </label>
          <label>
            <span>Difficulty</span>
            <input
              onChange={handleChange}
              defaultValue={defaultValues.difficulty}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
          </label>
          {/* </Auth>
          <Auth capability="create"> */}
          <label>
            <button type="submit">Add Item</button>
          </label>
          </Auth>
        </form>
         <List deleteItem={deleteItem} list={paginatedList} toggleComplete={toggleComplete}/>
         {/* <List list={settings.todos} toggleComplete={toggleComplete}/> */}

        <PaginationSettings
        //  currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         itemsPerPage={settings.maxItemsPerPage}
         total={filteredList.length}
         />
         </When>
        
        
      </div>
    </>
  );
};
export default ToDo

