const useTraverseTree = () => {
   function insertNode (tree, folderId, item, isFolder) {
    if(tree.id === folderId && tree.isFolder) {
        tree.items.unshift({
            id: new Date().getTime(),
            name: item,
            isFolder,
            items: []
        })
        return tree
    }
    let latestnode = [];
    latestnode = tree.items.map((obj) => {
        return insertNode(obj, folderId, item, isFolder)
    })
    return { ...tree, items: latestnode }
   }

   const deleteNode = () => {}
   const updateNode = () => {}

   return { insertNode, deleteNode, updateNode }
}
export default useTraverseTree;