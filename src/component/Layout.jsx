import React from 'react';

function Layout({title, children}) {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center mb-5">{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;