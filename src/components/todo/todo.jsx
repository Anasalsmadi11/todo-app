import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.jsx';
import List from '../List/list.jsx';
import { v4 as uuid } from 'uuid';
import { SettingContext } from '../../context/Settings/settings.jsx';
import PaginationSettings from '../pagination/pagination.jsx';
// import { Pagination } from '@mantine/core';


 const ToDo = () => {


  const settings = useContext(SettingContext);
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const [currentPage, setCurrentPage] = useState(1);


  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);

    
  }

  // const arr= JSON.stringify(list)
  // // console.log("listData",arr)
  // localStorage.setItem("listData", arr)


  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }
  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  
  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);


  const filteredList = !settings.complete
    ? list.filter((item) => !item.complete)
    : list;
    
  const paginatedList = filteredList.slice(
    (currentPage - 1) * settings.maxItemsPerPage,
    currentPage * settings.maxItemsPerPage
  );

  // const one=localStorage.getItem("state")
  // console.log("one",one)

  return (
    <>
      <div className="ToDo">
        <h1>To Do List: {incomplete} items pending</h1>
        <form onSubmit={handleSubmit}>
          <h2>Add To Do Item</h2>
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
          <label>
            <button type="submit">Add Item</button>
          </label>
        </form>
         
         <List list={paginatedList} toggleComplete={toggleComplete}/>

        <PaginationSettings
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         itemsPerPage={settings.maxItemsPerPage}
         total={10}
        />
        
          {/* <Pagination
            itemsPerPage={settings.maxItemsPerPage}
            total={10}
            page={currentPage}
            onChange={(newPage) => setCurrentPage(newPage)}
            withPagesCount
          /> */}
        
      </div>
    </>
  );
};
export default ToDo

// const ToDo = () => {

//   const [defaultValues] = useState({
//     difficulty: 4,
//   });

//   const [list, setList] = useState([]);
//   const [incomplete, setIncomplete] = useState([]);
//   const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
//   const settings= useContext(SettingContext)
//   const [currentPage, setCurrentPage] = useState(1);


//   function addItem(item) {
//     item.id = uuid();
//     item.complete = false;
//     console.log(item);
//     setList([...list, item]);
//   }

//   function deleteItem(id) {
//     const items = list.filter( item => item.id !== id );
//     setList(items);
//   }

//   function toggleComplete(id) {

//     const items = list.map( item => {
//       if ( item.id == id ) {
//         item.complete = ! item.complete;
//       }
//       return item;
//     });

//     setList(items);

//   }

//   useEffect(() => {
//     let incompleteCount = list.filter(item => !item.complete).length;
//     setIncomplete(incompleteCount);
//     document.title = `To Do List: ${incomplete}`;
//   }, [list]);


//   const filter = settings.complete
//   ? list.filter((item) => !item.complete)
//   : list;
// const paginatedList = filter.slice(
//   (currentPage - 1) * settings.items,
//   currentPage * settings.items
// );

//   return (
//     <>
//       <header>
//         <h1>To Do List: {incomplete} items pending</h1>
//       </header>

//       <form onSubmit={handleSubmit}>

//         <h2>Add To Do Item</h2>

//         <label>
//           <span>To Do Item</span>
//           <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
//         </label>

//         <label>
//           <span>Assigned To</span>
//           <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
//         </label>

//         <label>
//           <span>Difficulty</span>
//           <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
//         </label>

//         <label>
//           <button type="submit">Add Item</button>
//         </label>
//       </form>


//       {/* {list.map(item => (
//         <div key={item.id}>
//         <p>{item.text}</p>
//         <p><small>Assigned to: {item.assignee}</small></p>
//         <p><small>Difficulty: {item.difficulty}</small></p>
//         <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
//         <hr />
//         </div>
//       ))} */}
//       <List listData={paginatedList} toggleComplete={toggleComplete}/>
       
//         {list.length > settings.items && (
//           <Pagination
//             itemsPerPage={settings.items}
//             total={10}
//             page={currentPage}
//             onChange={(newPage) => setCurrentPage(newPage)}
//             withPagesCount
//           />
//         )}

//     </>
//   );
// };

// export default ToDo;








// import React, { useEffect, useState,useContext } from 'react';
// import useForm from '../../hooks/form.jsx';
// import List from '../List/index.jsx';
// // import { v4 as uuid } from 'uuid';
// import { SettingContext } from '../../context/Settings/index.jsx';

// const ToDo = () => {
//   const settings= useContext(SettingContext)

//   const [defaultValues] = useState({
//     difficulty: 2,
//   });
//   const [list, setList] = useState([]);
//   const [incomplete, setIncomplete] = useState([]);
//   const { handleChange, handleSubmit } = useForm(settings.addItem, defaultValues);
  
//   function addItem(item) {
//     item.id = uuid();
//     item.complete = false;
//     console.log(item);
//     settings.list=[...settings.list, item];
//   }
//   console.log("list",settings.list);

//   function deleteItem(id) {
//     const items = list.filter( item => item.id !== id );
//     setList(items);
//   }

//   function toggleComplete(id) {

//     const items = list.map( item => {
//       if ( item.id == id ) {
//         item.complete = ! item.complete;
//       }
//       return item;
//     });

//     setList(items);

//   }

//   useEffect(() => {
//     let incompleteCount = settings.list.filter(item => !item.complete).length;
//     settings.incomplete= incompleteCount;
//     document.title = `To Do List: ${settings.incomplete}`;
//   }, [settings.list]);

//   return (
//     <>
//       <header>
//         <h1>To Do List: {settings.incomplete} items pending</h1>
//       </header>

//       <form onSubmit={handleSubmit}>

//         <h2>Add To Do Item</h2>

//         <label>
//           <span>To Do Item</span>
//           <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
//         </label>

//         <label>
//           <span>Assigned To</span>
//           <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
//         </label>

//         <label>
//           <span>Difficulty</span>
//           <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
//         </label>

//         <label>
//           <button type="submit">Add Item</button>
//         </label>
//       </form>
//     <List data={settings.list}/>

//     </>
//   );
// };

// export default ToDo;
