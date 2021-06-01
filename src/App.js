import React, { useEffect, useState } from 'react';

import './App.css';
import { getSearchedImages, getTrendingImages } from './API/api'
import Card from './components/Card'
function App() {
  const [imgList, setImgList] = useState([]);
  const [query, setInput] = useState("");


  useEffect(() => {
    async function fetchData() {
      const data = await getTrendingImages();
      if (data) {
        setImgList(data);
      }
    }
    fetchData()
  }, []);

  // useEffect(() => {

  // }, [query]);

  function getData() {
    if (query.trim() === "") {
      return;
    }
    async function fetchData() {
      const data = await getSearchedImages(query);
      if (data) {
        setImgList(data);
      }
    }
    fetchData()
  }

  return (
    <>

      <div className="input-parent">
        <input type="text" placeholder="Search your image here.." onChange={(e) => setInput(e.target.value)} />
        <button onClick={getData}>Search</button>
      </div>

      {imgList.length === 0 ? <h2>No images found</h2> : null}
      <div className="card-columns">
        {imgList.map((img) => {
          let orignalurl = img.urls.small.split('?')[0]
          let description = img.alt_description
          if (description) {
            description = description.split(' ').join('_');
          }
          else {
            description = "wallpaper"
          }
          description += ".jpg"
          return (
            <Card
              urls={img.urls}
              key={img.id}
              download={orignalurl + process.env.REACT_APP_API_DOWNLOAD + description}
            />
          );
        })}
      </div>
    </>
  );
}
export default App;
