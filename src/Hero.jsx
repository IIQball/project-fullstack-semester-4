import './Hero.css'

function Hero(){
    return(
        <div className="hero">
            <div className="title">
                <h1>Pemrograman React</h1>
            </div>
            <div className="content">
                <h2>Alasan Menggunakan React</h2>
                <ol className='content-list'>
                    <li>Fleksibel</li>
                    <li>Handal</li>
                    <li>Mempunyai komunitas yang besar</li>
                    <li>Dukungan Penuh dari Facebook</li>
                </ol>
            </div>
            <hr />
        </div>
    )
}

export default Hero