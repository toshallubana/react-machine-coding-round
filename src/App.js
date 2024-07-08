import { useState } from 'react';
import './App.css';
import FolderCreation from './Components/FolderCreation';
import {explorer} from './Components/FolderCreation/data'
import useTraverseTree from './hooks/useTraverseTree';
import Pagination from './Components/Pagination';
import PasswordGenerator from './Components/PasswordGenerator';

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

  /****** Folder createion code end */


  return (
    // <Pagination />
    <PasswordGenerator />
  )
}

export default App;
