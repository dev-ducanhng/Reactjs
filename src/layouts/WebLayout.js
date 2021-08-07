import React from 'react';
import Footer from '../components/web/footer';
import Header from "../components/web/header";

const WebLayout = (props) => {
    console.log(props)
    return (
        
        <div>
            <Header {...props} />
            <div className="w-full">
                <div className=" flex">
                    
                    <main className="w-full">
                        {props.children}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    
    );
}
export default WebLayout;