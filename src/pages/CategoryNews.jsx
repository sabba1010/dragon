import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
  const { id } = useParams(); // id is a string
  const data = useLoaderData();

  const [categoryNew, setCategoryNews] = useState([]);

  useEffect(() => {
    let filteredNews = [];

    if (id === "0") {
      filteredNews = data;
    } else if (id === "1") {
      filteredNews = data.filter(news => news.others?.is_today_pick === true);
    } else {
      filteredNews = data.filter(news => news.category_id?.toString() === id);
    }

    setCategoryNews(filteredNews);
  }, [data, id]);

  return (
    <div>
     <h2>Total {categoryNew.length}</h2>
     <div className='grid grid-cols-1 gap-5'>
     {
        categoryNew.map(news=> 
        <NewsCard key={news.id} news={news}></NewsCard>)
     }
     </div>
    </div>
  );
};

export default CategoryNews;



// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// const CategoryNews = () => {
//    const {id}= useParams();
//    const data = useLoaderData();

//    const[categoryNew, setCategoryNews]= useState([]);
// //    console.log(id, data);
//    useEffect(()=>{
//    if(id=="0"){
//     setCategoryNews(data);
//    }
//    else if( id=- "1"){
    
//     const filterNews= data.filter(news=>news.others.is_today_pick == true );
//     setCategoryNews(filterNews);
//    }

//     const filterNews= data.filter(news=>news.category_id == id );
//     console.log(filterNews);
    
// setCategoryNews(filterNews);
//    },[data,id]);



//     return (
//         <div>
//             Category News {categoryNew.length}
//         </div>
//     );
// };

// export default CategoryNews;