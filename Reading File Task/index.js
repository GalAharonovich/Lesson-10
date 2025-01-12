import fs from "node:fs/promises"

async function getData() {
    try {
        const data = await fs.readFile("C:/Users/galah/Desktop/new/SVCollege - course/Lesson 10/Reading File Task/data.txt", "utf-8");
        countTheWords(data)
    } catch (error) {
        console.error("Error reading the file:", error);
    }
}

getData();

async function countTheWords(data){
    const count = data.split(' ')
    console.log(count.length + " words")

}