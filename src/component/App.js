import Pagination from "./Pagination";
import Posts from "./Posts";
import axios from 'axios';
import {useEffect, useState} from "react";
import "./App.css"

function App() {
   const [posts,setPosts]=useState([])
   const [currentPage,setCurrentPage] =useState(1);
   const postsPerPage = 10;

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axios.get("./data.json")
      setPosts(response.data)
    }
    fetchData();
  },[])


// 페이지 계산
const indexOfLast = currentPage * postsPerPage;
const indexOfFirst = indexOfLast - postsPerPage ;
console.log(indexOfLast);
console.log(indexOfFirst);
const currentPosts = (posts) =>{
  let currentPosts = 0;
  currentPosts = posts.slice(indexOfFirst,indexOfLast);
  return currentPosts;
}
// currentPosts는 현재 페이지에 맞는 데이터 배열이다.


  return (
    
    <div className="box">
      <Posts posts={currentPosts(posts)} />
      <Pagination  postsPerPage ={postsPerPage}
                  totalPosts ={posts.length}
                  paginate ={setCurrentPage}
        />
    </div>
  )
}


export default App;
