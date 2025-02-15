import axios from 'axios'
const GetBookApi = async () => {
    try {
        // const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=*&maxResults=10&startIndex=10")
       
        // const data = await  response.data();
        // // console.log("Data",data.data);
        // // You can access specific fields like this:
        // console.log("Total Items:", data.totalItems);
        // //console.log("Books:", data.items);
        // if(data.items){
        //     data.items.forEach((book) =>{
        //         console.log("Book title : ",book.volumeInfo.title)
        //      });
        // }else{
        //     console.log("No book found");
            
        // }

        

    } catch (e) {
        console.log("Error while retrieving books data", e);

    }

}
export default GetBookApi