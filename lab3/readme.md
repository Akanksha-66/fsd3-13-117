localhost - URL
127.0.0.1 - IP address

ctrl+c - stop the server

nodemon

every request from client has a pair of {request,response}
npm - node package manager
## Node Package Manager (NPM)
used to install, run , uninstall any program/project and program 
- npm install <packageName>
- npm unistall <packageName>

to use npm, the project must be npm project,
to create npm project we can use 
- npm init -y
- it creates a package.json file automatically
package.json holds all the information related to install 
packages from npm 
- update package.json, set type = 'module'
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_modules by .gitignore
- D :dev dependency


Nodemon - it restart the server automatically when file changes, to install
> npm i nodemon -D
Note: -D flag will install this package as developer dependency

- to execute any program, update the package.json file then start the server as 
      <b>npm run dev</b>
- start -> it will execute the app on deployement
- dev -> it will start the server in development phase (only for developers)
- res -> it will return contents (json/html/plain) to the user/client 
- req -> it will retrive the information from client to the server 
- server send also statusCodes the error/success message

## Status Codes
- 200 -> Ok
- 201 -> created
- 400 -> bad request
- 401 -> unauthorized
- 403 -> forbidden
- 404 -> not found
- 500 -> internal server error

## Content Type
- text/plain
- text/html
- appication/json
- text/css

the content type and status code can be send back to client by two ways
1. res.writeHead
2. res.setHeader
3. res.statusCode

## response
1. res.end
   end("any html content/tag")
2. html file
  -> read by create Read Stream
  -> pipe with res

## send html file to client
1. html file
- read html file using createReadStream
- pipe it with res object

2. html content 
   send any html tags/contents by using 
   res.end('<any html tag>')

## JSON (Javascript object notation)
server returns data only not html contents bea=cause html contents will be written by content developer. The data is in json format
JSON always stores data in key-value pair enclosed by curly bracket{}
array can be stored by square bracket [] one pair of curly bracket will represent one object and its property will be separated by comma
example->
```
{    
id:1,
name:'Mobile',
price: 25000,
rating:4.5,
review:200
}

## headers
header is used to tell the client, the type of data sent by the server it may be html files, json data, plain text file, css file any tokens (for logging) 
1. text/plain ->simple text
2. text/html -> html contents/file
3. applicatin/json -> json contents/ file
4. text/css -> stylesheet
5. application/forn-data -> for uploading files
6. application/auth -> for tokens 
the headers can be set by res object at server side by two ways 

1. res.setHeaders()
2. res.writeHead()

Get -> no parameters passed to the server when we receive all items - get all items
Post -> to add records we pass the value from BODY section in json format of api tester (echo api)
delete -> to delete any product we pass parameter that is id of the product from url
update -> put/patch - to update any products we pass id from url and data to update from body
