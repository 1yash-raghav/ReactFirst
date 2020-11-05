import React from 'react';
import {BounceLoader} from 'react-spinners';

const Loading = () => {
    return(
        <div className="container">
            <BounceLoader color="yellow" size={20}  loading/>
        </div>
    );
};
export default Loading;