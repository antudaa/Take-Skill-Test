import React from 'react';

const Blog = () => {
    return (
        <div className='mt-16'>
            <div style={{width:'80vw', marginRight:'auto', marginLeft:'auto'}} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-50 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;