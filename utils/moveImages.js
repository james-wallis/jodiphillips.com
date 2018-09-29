#! /usr/bin/env node
const path = require('path');
const fs = require('fs-extra');

const HOME = process.env.HOME;

const dropboxDir = path.join(HOME, 'Dropbox/Website Other Pages');
const tempDir = path.join(HOME, 'Github/jodiphillips.com/imagesTemp');
const imagesDir = path.join(HOME, 'Github/jodiphillips.com/images');

async function copyFiles() {
  try {
    await fs.emptyDir(tempDir)
    await fs.ensureDir(tempDir)
    await fs.copy(dropboxDir, tempDir);
    const tempFolders = await fs.readdir(tempDir);
    for (var i = 0; i < tempFolders.length; i++) {
      if ((tempFolders[i].charAt(0) !== 'R') && (['home', 'logos', 'icons'].indexOf(tempFolders[i]) == -1)) {
        console.log(tempFolders[i]);
        await fs.unlink(path.join(tempDir, tempFolders[i]));
      } else {
        let formattedString = tempFolders[i].toLowerCase();
        formattedString = formattedString.replace(/\s/g, '');
        await fs.rename(path.join(tempDir, tempFolders[i]), path.join(tempDir, formattedString));
        await renameFolder(formattedString);
      }
    }
    console.log('success!')
    console.log('Moving to images directory');
    await fs.emptyDir(imagesDir);
    await fs.move(tempDir, imagesDir, {overwrite: true});
    console.log('Updated images');
  } catch (err) {
    console.error(err)
  }
}

async function renameFolder(folder) {
  let folderToRenameTo = undefined;
  switch (folder) {
    case 'row1left-aboutartistjodi':
      folderToRenameTo = 'jodi';
      break;
    case 'row1middle-insidethestudio':
      folderToRenameTo = 'inside_the_studio';
      break;
    case 'row1right-artinspaces':
      folderToRenameTo = 'art_in_spaces';
      break;
    case 'row2left-acrylicart':
      folderToRenameTo = 'acrylic/art';
      break;
    case 'row2middle-resinart':
      folderToRenameTo = 'resin/art';
      break;
    case 'row2right-resinjewellery':
      folderToRenameTo = 'resin/jewellery';
      break;
    case 'row3left-snowboard':
      folderToRenameTo = 'client_projects/snowboard';
      break;
    case 'row3right-kitchensplashback':
      folderToRenameTo = 'client_projects/kitchen';
      break;
    case 'row4left-acrylicgifts':
      folderToRenameTo = 'acrylic/gifts';
      break;
    case 'row4middle-bespoketables':
      folderToRenameTo = 'client_projects/tables';
      break;
    case 'row4right-resingifts':
      folderToRenameTo = 'resin/gifts';
      break;
    case 'row5-leftgardenart':
      folderToRenameTo = 'client_projects/garden';
      break;
    case 'row5right-bathroomsplashback':
      folderToRenameTo = 'client_projects/cloakroom';
      break;
    case 'row6left-exhibitions':
      folderToRenameTo = 'exhibitions/home';
      break;
    case 'row6right-homebuilding&renovationshow':
      folderToRenameTo = 'exhibitions/homebuildingshow';
      break;
    case 'row7left-videos':
      folderToRenameTo = 'videos';
      break;
    case 'row7middle-christmas2018':
      folderToRenameTo = 'christmas';
      break;
    case 'row7right-commissions':
      folderToRenameTo = 'commissions';
      break;
    default:
      // console.log('case not matched', folder);
      folderToRenameTo = folder;
      break;
  }
  // console.log('called');
  // console.log('tempDir', tempDir);
  // console.log('folder', folder);
  // console.log('folder to rename to ', folderToRenameTo);
  await fs.ensureDir(path.join(tempDir, folderToRenameTo));
  await fs.rename(path.join(tempDir, folder), path.join(tempDir, folderToRenameTo));
  if (folder !== 'icons' && folder !== 'logos') {
    await fs.rename(path.join(tempDir, folderToRenameTo, 'Web'), path.join(tempDir, folderToRenameTo, 'desktop'));
    await fs.rename(path.join(tempDir, folderToRenameTo, 'Mobile'), path.join(tempDir, folderToRenameTo, 'mobile'));
    await renameHero([path.join(tempDir, folderToRenameTo, 'desktop'), path.join(tempDir, folderToRenameTo, 'mobile')]);
  }
}

async function renameHero(folders) {
  for (let index = 0; index < folders.length; index++) {
    const dirPath = folders[index];
    let list = await fs.readdir(dirPath);
    for (var i = 0; i < list.length; i++) {
      console.log(list[i]);
      if (list[i].toLowerCase() === 'top-pic.jpg') {
        fs.rename(path.join(dirPath, list[i]), path.join(dirPath, 'hero.jpg'))
      }
    }
  }
}

copyFiles()