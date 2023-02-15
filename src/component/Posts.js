function ListItem({post}){
    return(
        <figure>
            <img src={post.image} alt={post.name} />
            <figcaption>
                <dl>
                    <dt>{post.name}</dt>
                    <dd>{post.price}</dd>
                </dl>
            </figcaption>
        </figure>
    )
}




function Posts({posts}){
    return (
        <ul>
            {posts.map((post)=>{
             return  <li key={post.id}>
                <ListItem post={post}/>
            </li>
            })}
        </ul>
        )
  }
  
  export default Posts;
  