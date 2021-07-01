import React from "react";
import { User } from '.';

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="row align-items-center my-5">
                    <User />
                </div>
            </div>
        </div>
    );
}

export default Home;
