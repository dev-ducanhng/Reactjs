import React from 'react'

import Nav from "../components/admin/nav";


const AdminLayout = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                
                <div className="w-full">
                    <div className=" flex">
                        <Nav />
                        <main className="w-full">
                            {props.children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;
