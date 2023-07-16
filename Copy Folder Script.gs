function mainCopyFolder() {

  const folderIdSrc = ""; // the original folder id
  const folderdestid="";//the id where you want to create new folder
  const folderNameDest = ""; // new folder name

  const folderSrc = DriveApp.getFolderById(folderIdSrc);
  const folderdestlink=DriveApp.getFolderById(folderdestid);
  const folderDest = folderdestlink.createFolder(folderNameDest);

  copyFolder(folderSrc, folderDest);
}

function copyFolder(src, dest) {
  const folders = src.getFolders();
  const files = src.getFiles();

  while (files.hasNext()) {
    const file = files.next();
    file.makeCopy(file.getName(), dest);
  }

  while (folders.hasNext()) {
    const subFolder = folders.next();
    const folderName = subFolder.getName();
    const folderDest = dest.createFolder(folderName);
    copyFolder(subFolder, folderDest);
