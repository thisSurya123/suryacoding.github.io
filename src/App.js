import './App.css';
import AOS from 'aos';
import gambar from './img/profile.png';
import 'aos/dist/aos.css';
import TypeIt from 'typeit-react';


AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function App() {
  return (
    <div className='h-screen'>
     <Nav/>
     <Profile/>
     <About/>
    </div>
  );
}

function Profile(){
  return(
  <div className='grid grid-cols-2 content-center h-screen bg-gradient-to-r from-red-800 to-black'>
     <img 
    className="absolute z-50"
    src={gambar}
    data-aos="slide-right"
    data-aos-offset="300"
    style={{
      top: "20%",
      right: "50px"
    }} />
  
    <div className="grid content-center 
    p-20 
    rounded-lg m-20"
    data-aos="fade-left">

      {/* <h1 className="">WELCOME</h1>
        <p>Hallo everyone, My name is Surya Ahmad Afandi
          and i am a sofware engineering
        </p> */}
        <TypeIt
          className="text-5xl 
          text-white 
          tracking-widest 
          font-black"
          options={{
            loop: true
          }}
          getBeforeInit={(instance) => {
            instance
              .type("Hi, I'm Sruya")
              .pause(750)
              .move(-2)
              .pause(500)
              .delete(2)
              .pause(200)
              .type("ur")
              .move(2)
              .pause(3000)
              .delete(5)
              .type("Sofware ")
              .pause(500)
              .type("Engineering")
              .pause(5000)

        return instance;
      }}/>
      <button className="bg-black
       py-3 w-40 text-white 
       outline outline-2 outline-offset-4
       transition ease-out 
       duration-300 hover:bg-white 
       hover:text-black hover:scale-125
       mt-16 ring-2 ring-white ">Detail</button>
    </div>

    <div className="text-9xl 
    font-black 
    tracking-widest
    text-gray-400 m-10 " data-aos="fade-right">
     SURYA AHMAD AFANDI
    </div>
  </div>
  );
}
function About(){
  return(
    <div className="h-screen">
      <h2>about</h2>
    </div>
  );
}


function Nav(){

  return(
    <div className="flex justify-between bg-red-500 p-3 text-white text-xl">
      <h1>
        <TypeIt
        options ={{
          loop: true
        }
          
        }
        getBeforeInit={(instance) =>{
          instance 
          .type("Surya")
          .pause("300")
          .type(".Coding()")
          .pause(10000)
          return instance;
        }}
        />
      </h1>
      <ul className="flex">
        <li className="ml-5 p-2 rounded-md transition east-out duration-300
         hover:bg-black  px-5"><a href="#">Home</a></li>
        <li className="ml-5 p-2 rounded-md transition east-out duration-300
         hover:bg-black  px-5"><a href="#">About</a></li>
        <li className="ml-5 p-2 rounded-md transition east-out duration-300
         hover:bg-black  px-5"><a href="#">Project</a></li>
        <li className="ml-5 p-2 rounded-md transition east-out duration-300
         hover:bg-black  px-5"><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}


export default App;
