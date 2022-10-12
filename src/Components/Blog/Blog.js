import React from 'react';

const Blog = () => {
    return (
        <div className='mt-16'>
            <div style={{width:'80vw', marginRight:'auto', marginLeft:'auto'}} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-50 rounded-box shadow-xl my-4">
                <div className="collapse-title text-xl font-medium">
                    What Is React Router...
                </div>
                <div className="collapse-content">
                    <p><strong>ReactJS Router is mainly used for developing Single Page Web Applications.</strong> React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                    <strong>React Router is a standard library for routing in React.</strong> It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.<strong>In React, routers help create and navigate between the different URLs that make up your web application.</strong> They allow your user to move between the components of your app while preserving user state, and can provide unique URLs for these components to make them more shareable.
                    </p>
                </div>
            </div>


            <div style={{width:'80vw', marginRight:'auto', marginLeft:'auto'}} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-50 rounded-box shadow-xl my-4">
                <div className="collapse-title text-xl font-medium">
                    How Context API Works...
                </div>
                <div className="collapse-content">
                    <p><strong>The React Context API is a way for a React app to effectively produce global variables that can be passed around.</strong> This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>


            <div style={{width:'80vw', marginRight:'auto', marginLeft:'auto'}} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-50 rounded-box shadow-xl my-4">
                <div className="collapse-title text-xl font-medium">
                    What Is useRef Hook In React ...
                </div>
                <div className="collapse-content">
                    <p><strong>The useRef Hook allows you to persist values between renders.</strong> It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                    <strong>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ).</strong> The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;