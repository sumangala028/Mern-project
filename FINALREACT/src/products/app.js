import React from 'react';

class App extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className = "col-6">
                        Form
                    </div>
                    <div className="col-6">
                        List
                    </div>
                </div>
            </div>
        )

        
    }
}

export default App;