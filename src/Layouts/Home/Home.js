import React, {useState, useEffect} from 'react';
import Card from './../../components/Card/Card';
import CardStyle2 from './../../components/CardStyle2/CardStyle2';
import styles from './Home.module.css';

/*let posts=[];

posts = new Posts().getPostsList((data)=>{
  posts = data
});
console.log(posts)*/

function Home (){

  // const [posts, setPosts] = useState([]);
  const [renderposts, setRenderPosts] = useState([]);
  const [updateState, setUpdateState] = useState(false);

 useEffect(()=>{
   let posts1 = renderposts;
   let prevId = 0;
   fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response=>response.json())
    .then((json) => {
        // console.log(json)
        const promises = json.map((obj) => {
          // console.log(obj.userId)
          if(obj.userId !== prevId){
            let url = `https://jsonplaceholder.typicode.com/users/${obj.userId}`
            // console.log(url)
            return fetch(url)
                .then(response=>response.json())
                .then((json) => {
                    // console.log(json);
                    posts1.push({post:obj, user:json});
                    setRenderPosts(posts1);
                    // console.log(renderposts)
                })
                prevId = obj.userId;
          }
        })

        return Promise.all(promises)
    })
    .then(() => {
        // console.log('job done')
        setUpdateState(true);
    })
 }, [updateState]);

 let currentcount=0;

  return (<>
  {
    //console.log(renderposts)
  }
  <section className={styles.banner}>
    <div className="container">
      <h1>Hello ReactJs</h1>
      <p>Just another React Project</p>
    </div>
  </section>
  <section>
  <div className="container">
  <div className="row">
    {renderposts.map((posts, index)=>{
         if(index<6){
           return <div className="col-md-4" key={posts.post.id}>
            <Card post={posts}/>
          </div>
        }
    })}
  </div>
</div>
</section>
<section className="section2">
<div className="container cardstyle2">
<div className="row">
  <div className="col-md-6 cardstyle2-left">
    {
      renderposts.map((posts, index)=>{
         if(index<1){
           currentcount += 1;
           return <CardStyle2 post={posts} single={true} key={posts.post.id}/>
        }
    })}
  </div>
  <div className="col-md-6 cardstyle2-right">
      {renderposts.map((posts, index)=>{
           if(!(currentcount > index) && index < currentcount + 2){
             return <CardStyle2 post={posts} single={false} key={posts.post.id}/>
          }
      })}
  </div>
</div>
</div>
</section>
</>
);
}
export default Home;
