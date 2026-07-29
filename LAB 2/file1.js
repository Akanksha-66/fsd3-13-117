import { writeFile } from "fs/promises";

await writeFile("stud.txt", "Name: Akanksha");
console.log("File written");