import Navbar from './Navbar'

const home = () => {
    return(
        <div>
        <Navbar />
        <div className="Container mt-4">
            <h3>Test Bootstrap</h3>
            <button className="btn btn-primary"> button prim</button>
            <button className="btn btn-secondary ms-2">button secondary</button>
            <button className="btn btn-info ms-2">button info</button>
            <button className="btn btn-success ms-2">button success</button>
            <button className="btn btn-warning ms-2">button warning</button>
            <button className="btn btn-danger ms-2">button danger</button>
        </div>
        </div>
    )
}

export default home