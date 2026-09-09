import { writeFile} from "fs/promises";

await writeFile("stud.txt","Name: Arya");
console.log("File written");
