const Home = () => {
    return (  
        <>
     <div className='home'>    
    <div className="home-content">
        <h3>Hello, its me</h3>
        <h1>JANE DOE</h1>
        <h3>And Im a <span>Frontend AI</span></h3>
        <p>Lorem ipsum dolor it amet consectetur 
            adipisicing elit. Quasi, dolorum. Culpa 
            veniam, consequatur odit excepturi
            </p>
    <div className="social-media">
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
    </div>
    <a href="#" className="btn">Download CV</a>
     </div>


     <div className="home-img">
     
     <img src={require('./home1.png')} />
    </div>
    </div>
 
        </>
    );
}
 
export default Home;
<div></div>