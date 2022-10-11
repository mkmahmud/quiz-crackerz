import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
             <div className="card bg-danger m-2" >
                <div class="card-body">
                    <h5 class="card-title bg-success p-2">Q: What is the purpose of react router?</h5> 
                    <p className=''> <b>Ans:</b> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
             </div>
             <div className="card bg-danger m-2" >
                <div class="card-body">
                    <h5 class="card-title bg-success p-2">Q: How does context api works?</h5> 
                    <p className=''> <b>Ans:</b> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
             </div>
             <div className="card bg-danger m-2" >
                <div class="card-body">
                    <h5 class="card-title bg-success p-2">Q: What is useref?</h5> 
                    <p className=''> <b>Ans:</b> Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its div and attribute ref = myref .current property to the corresponding DOM node whenever that node changes.</p>
                     
                </div>
             </div>
        </div>
    );
};

export default Blog;