//Task 1
import fs from "node:fs/promises"

async function getData() {
    try {
        const data = await fs.readFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/input.txt", "utf-8");
        console.log(data)
    } catch (error) {
        console.error("Error reading the file:", error);
    }
}

// getData()

//Task 2
async function writeData() {
    try {
        const message = "Learning Node.js is fun!"
        await fs.appendFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/output.txt", message);
        console.log("completed..")
    } catch (error) {
        console.error("Error writing the file:", error);
    }
}

// writeData()

//Task 3
async function writeTime() {
    try {
        const d = new Date();
        let text = d.toLocaleTimeString();

        await fs.appendFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/log.txt", text);
        console.log("completed..")
    } catch (error) {
        console.error("Error writing this file:", error);
    }
}

// writeTime()

//Task 4
async function readingFile() {
    try {

        const newFile = await fs.readFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/log.txt", {encoding: 'utf8'});
        console.log("completed..")
    } catch (error) {
        console.error("Error reading the file:", error);
    }
}

// readingFile()

//Task 5

async function newDirectory() {
    try {
        const directoryPath = './testDir';
        await fs.mkdir(directoryPath)
        console.log("completed..")
    } catch (error) {
        console.error("Error creating a new directory:", error);
    }
}

// newDirectory()

//Task 6

async function isDirExists() {
    try {
        await fs.access('./log.txt', fs.constants.R_OK)
        console.log("The file exists")
    } catch (error) {
        console.log(error)
    }
}


// isDirExists()

//Task 7

async function removeFile() {
    try {
        await fs.unlink('./log.txt')
        console.log("The file has been deleted")
    } catch (error) {
        console.log(error)
    }
}


// removeFile()

//Task 8

async function renameFile() {
    try {
        await fs.rename('./oldname.txt', './newname.txt');
        console.log("file's name has been changed")
    }
    catch (error) {
        console.log(error)
    }
}

// renameFile()

//Task 9
async function getCurrentFilenames() {
    try {
        const files = await fs.readdir('C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/');
        for (const file of files)
            console.log(file);
    } catch (err) {
        console.log('An error occurred:' + err)
    }
}

// getCurrentFilenames()

//Task 10
    async function getEveryLine(){
    const wholeFile = await fs.readFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/input.txt", {encoding: 'utf8'});
    const splittedFile = wholeFile.split('\n')
    console.log(splittedFile)
    }

    getEveryLine()


//Task 11
async function writeJson() {
    try {
        const dataForJson = {
            name: "John",
            age: 30,
            isAdmin: true
        };

        const jsonString = JSON.stringify(dataForJson);

        await fs.appendFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/data.json", jsonString);
        console.log("completed..")
    } catch (error) {
        console.error("Error writing this file:", error);
    }
}

// writeJson()

//Task 12
async function readJson() {
    try {
        const newData = await fs.readFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/data.json");
        const newString = JSON.parse(newData)
        console.log(newString)
    } catch (error) {
        console.error("Error reading this file:", error);
    }
}

// readJson()

//Task 13
async function copyData() {
    try {
        await fs.copyFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/source.txt", "C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/destination.txt");
        console.log("completed..")
    } catch (error) {
        console.error("Error copying this file:", error);
    }
}

// copyData()

//Task 14
async function copyToDirectory() {
    try {
        const createDirectory = await fs.mkdir("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/newDir");
        const moveFile = await fs.rename("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/fileA.txt", "C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/newDir/fileA.txt");
        console.log("completed..")
    } catch (error) {
        console.error("Error moving this file:", error);
    }
}

// copyToDirectory()

//Task 15
import path from "node:path";
async function removeAllFilesAsync(directory) {
    const files = await fs.readdir(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        await fs.unlink(filePath);
    }
}

try {
    removeAllFilesAsync('C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/myDirectory')
    console.log('All files have been removed.')
} catch (error) {
    console.log(error)
}

//Task 16
async function changesLog() {
    try {
        const watcher = fs.watch('C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks');
        for await (const event of watcher)
            console.log(event);
    } catch (err) {
        console.log(err)
        return;
    }
}

// changesLog()

//Task 17
async function getFileSize() {
    try {

        const stats = await fs.stat("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/file.txt");
        console.log(stats.size)
    } catch (error) {
        console.log(error)
    }
}

// getFileSize();

//Task 18
async function writeMultipleFiles() {
    try {
        const message = "New file is born"
        for (let i = 1; i <= 3; i++) {
            await fs.appendFile(`C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/fyle${i}.txt`, message);
            console.log(`completed writing file number ${i}..`)
        }
    } catch (error) {
        console.error("Error writing the files:", error);
    }
}

// writeMultipleFiles()

//Task 19
async function countFiles() {
    const files = await fs.readdir('C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/myDirectory/');
    let count = 0
    files.forEach(file => {
        count++
    })
    console.log("There are " + count + " files in the directory")
}

// countFiles()

//Task 20
async function mergeContents() {
    try {
        const file1 = await fs.readFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/output.txt")
        const file2 = await fs.readFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/log.txt")
        const mergedFile = file1 + " " + file2
        fs.appendFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/20 Tasks/newText.txt", mergedFile)
        console.log("The files have been successfully merged")
    } catch (error) {
        console.log(error)
    }
}

// mergeContents()