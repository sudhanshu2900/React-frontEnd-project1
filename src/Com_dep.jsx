import React from 'react';
import Card from "./Card";
import Department from "./Department";

const Com_department = (props) =>
{
    return (
        <>
        <section>
        <div className="my-5">
            <h1 className="text-center">{props.name}</h1>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className="row gy-4">
                        {
                            Department.map((val, ind) => {
                            return <Card key={ind} 
                            imgsrc={val.imgsrc} 
                            title={val.title} />
                        })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>   
        </>
    );
};

export default Com_department; 

