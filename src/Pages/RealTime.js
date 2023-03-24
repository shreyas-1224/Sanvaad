import React, { useState, useEffect } from 'react';

function RealTime() {
    const [notebookOutput, setNotebookOutput] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/')
            .then(response => response.text())
            .then(data => setNotebookOutput(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>This is the output of the Jupyter notebook</h1>
            <div>
                <p>Click <a href="http://127.0.0.1:5000/">here</a> to visit realTime gesture recognition</p>
            </div>
            {notebookOutput && <div dangerouslySetInnerHTML={{ __html: notebookOutput }} />}
        </div>
    );
}

export default RealTime;
