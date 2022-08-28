import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import ComponentRenderer from "ComponentRenderer.js";
import ThankYouPage from "ThankYouPage.js";
import BlogIndex from "pages/BlogIndex.js";
import Blog from "Blog.js";

import useFetch from "hooks/useFetch";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  
  const {loading, error, data} = useFetch('http://localhost:1337/api/blogs')

  if(loading) return <p>Loading...</p>
  if(error) return console.log(error) 
 

  return (
    <Router>
      <Switch>

        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>

        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route> 

        <Route path="/thank-you">
          <ThankYouPage />
        </Route>

        <Route path="/blog/:id">
          <Blog data={data.data} />
        </Route>

        <Route path="/">
          <BlogIndex data={data.data} />
        </Route>
        
        
      </Switch>
    </Router>
  );
}
