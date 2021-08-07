import React from 'react';

const AuthLayout = (props)=>{
    return (
        <div>
            <div className="w-full">
                <div className=" flex">
                    
                    <main className="w-full">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    )
}
export default AuthLayout;