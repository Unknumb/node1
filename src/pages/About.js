import React from "react";


function About(){
    return(
        <div style={{paddingTop: '70px', minHeight: '80vh'}}>
            {/**Seccion Hero */}
            <section className="bg-primary text-white py-5">
                <div className="container text-center">
                    <h1 className="display-4">Bienvenido a mi Web con Reactivito</h1>
                    <p className="lead">Mi primera aplicacion moderna</p>
                    <button className="btn btn-light btn-lg">Comenzar</button>
                </div>
            </section>

            {/**Tarjetas */}
            <section className="py-5">

                <div className="container">
                    <div className="row">
                        {/**Tarjetas individuales*/}

                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="fs-1">😍</div> 
                                    <h5>React</h5>
                                    <p>Componentes reutilizables</p>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                                <div className="container">
                    <div className="row">
                        {/**Tarjetas individuales*/}

                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="fs-1">👌👌</div> 
                                    <h5>React</h5>
                                    <p>Componentes holas</p>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                                <div className="container">
                    <div className="row">
                        {/**Tarjetas individuales*/}

                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <div className="fs-1">👌</div> 
                                    <h5>React</h5>
                                    <p>Componentes reutilizables</p>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </div>

    );
}

export default About