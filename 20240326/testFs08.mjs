import {  readFileSync , writeFileSync, readFile,writeFile} from "fs";

// let data = readFileSync("./video/movie.mp4");
// writeFileSync("./video/movie1.mp4",data);

const write = (data) => {
	writeFile("./video/movie2.mp4",(data,error) => {
		if(error){
			console.log(error);
			return false;
		}
	})
}

readFile("./video/movie.mp4",(error,data)=>{
	if(error){
		console.log(error);
		return false;
	}
	write(data);
})

