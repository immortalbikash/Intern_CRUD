import React from 'react'

const Cards = () => {
    return (
        <>
            <div className='container my-4'>
                <div className='row d-flex justify-content-between ms-5'>
                    <div className='col-lg-4'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards