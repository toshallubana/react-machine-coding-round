import { useState } from "react";

const FolderCreation = ({ explorer, handleInsertNode }) => {
  console.log(explorer, "explorer");
  const [expand, setExpand] = useState(false);
  const [showinput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
        handleInsertNode(explorer.id, e.target.value, showinput.isFolder)
        setShowInput({ ...showinput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div>
        <div
          onClick={() => setExpand(!expand)}
          className="cursor-pointer flex justify-between w-[300px]"
        >
          <span>🗂️ {explorer?.name}</span>
          <div className="flex flex-row gap-4">
            <button
              onClick={(e) => handleNewFolder(e, true)}
              className="border border-1 border-black rounded-sm"
            >
              Folder +
            </button>
            <button
              onClick={(e) => handleNewFolder(e, false)}
              className="border border-1 border-black rounded-sm"
            >
              File +
            </button>
          </div>
        </div>
        <div className="pl-5" style={{ display: expand ? "block" : "none" }}>
          {showinput.visible && (
            <div>
              <span>{showinput.isFolder ? "🗂️" : "📁"}</span>
              <input
                className="border border-1"
                autoFocus
                type="text"
                onBlur={() => setShowInput({ ...showinput, visible: false })}
                onKeyDown={onAddFolder}
              />
            </div>
          )}
          {explorer?.items?.map((val, i) => {
            return <FolderCreation handleInsertNode={handleInsertNode} explorer={val} key={val.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="flex flex-col">📁 {explorer.name}</span>;
  }
};
export default FolderCreation;
