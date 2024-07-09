// import { useState } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
// import FolderCreation from './Components/FolderCreation';
// import {explorer} from './Components/FolderCreation/data'
// import useTraverseTree from './hooks/useTraverseTree';
// import Pagination from './Components/Pagination';
// import PasswordGenerator from './Components/PasswordGenerator';
import ProgressBar from './Components/ProgressBar';

function App() {

  /****** Folder createion code start */
  // const [folderStructure, setFolderStructure] = useState(explorer);

  // const { insertNode } = useTraverseTree();

  // const handleInsertNode = (folderId, item, isFolder) => {
  //   const finalTree = insertNode(folderStructure, folderId, item , isFolder)
  //   setFolderStructure(finalTree);
  // }

  // return (
  //   <div className="App flex">
  //     <FolderCreation explorer={explorer} handleInsertNode={handleInsertNode} />
  //   </div>
  // );

  /****** Folder creation code end */

  /********** ProgressBar start */
  const [value, setValue] = useState(0);

  useEffect(() => {
      const timer = setInterval(() => {
        setValue((value) => value + 1)
      }, 100)
      return () => clearInterval(timer)
  },[])

  /********** ProgressBar end */


  return (
    // <Pagination />
    // <PasswordGenerator />
    <div className='p-10 flex flex-col items-center'>
      <ProgressBar value={value} />
    </div>
    
  )
}

export default App;
