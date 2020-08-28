import React from 'react';
import './App.css';
import Post from "./components/Post";
import Posts from "./Posts"

function App() {
  return (
    <div className="App">
        {
            Posts.map(({title,description,image},key)=>(
                <Post
                    index={key}
                    title={title}
                    description={description}
                    image={image}
                />
                )
            )
        }
      <Post title="Очень важная новость" image='https://unsplash.it/250/250' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, explicabo vero? A aut ea earum et ex, exercitationem id incidunt laboriosam molestiae, molestias natus nesciunt perferendis repellendus, tenetur vel voluptate!' />
    </div>
  );
}

export default App;