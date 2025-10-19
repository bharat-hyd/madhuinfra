import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';
import img_1 from './assets/deepak.jpg';
import img_2 from './assets/karthik.jpg';
import img_3 from './assets/sudheer.jpg';
import img_4 from './assets/anusha.jpg';

function Review() {
  const reviews = [
    {
      name:"Deepak",
      post:"",
      msg:"Choosing Madhu Infra was the best decision for my family. The team delivered on time and the quality is exactly what was promised.",
      img:img_1,
      url:"R7APdZtXbLk",
    },
    {
      name:"Karthik",
      post:"",
      msg:"We love how conveniently Parkville is located right between Hitech City and Gachibowli, so everything we need is just minutes away.",
      img:img_2,
      url:"S8B9Gvc-eZQ",
    },
    {
      name:"Sudheer",
      post:"",
      msg:"Our apartment is spacious and filled with sunlight. It's a joy to wake up here every morning.",
      img:img_3,
      url:"8sgIodCN6pA",
    },
    {
    name: "Anusha",
    post: "",
    msg: "Madhu Infra kept every promise — great quality, timely handover, and a peaceful community. Truly happy with our new home.",
    img: img_4,
    url:"t99LBGIsR-g",
  }
  ];
  const [popup, setPopup] = useState(false)
  const popUpHandle = () => {
    setPopup((prev) => !prev)
  }
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  useEffect(() => {
    if (popup) return;
    const interval = setInterval(nextSlide, 3000); // autoplay every 3s
    return () => clearInterval(interval);
  }, [popup]);

  const prevIndex = (current - 1 + reviews.length) % reviews.length;
  const nextIndex = (current + 1) % reviews.length;


  return (
    <>
      <style>{`
        #review{
          padding:60px 10px;
        }
        .slider-wrapper{
          width:100%;
          height:500px;
          overflow:hidden;
          position:relative;
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .slider{
          width:100%;
          height:100%;
          position:relative;
        }
        .slide{
          position:absolute;
          top:0;
          opacity:0;
          transition: all 0.5s ease;
          overflow:hidden;
        }
        .slide img{
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .slide.active{
          left:30%;
          width:40%;
          height:100%;
          opacity:1;
          z-index:2;
        }
        .slide.before{
          left:0;
          width:35%;
          height:80%;
          top:10%;
          opacity:0.6;
          z-index:1;
        }
        .slide.after{
          right:0;
          width:35%;
          height:80%;
          top:10%;
          opacity:0.6;
          z-index:1;
        }
        .review-list{
            display:flex;
            flex-wrap:wrap;
            align-items:center;
            justify-content:center;
        }
        .review-box{
            width:45%;
            margin-top:-100px;
            z-index:20;
            background:white;
            padding:20px;
            box-shadow:0px 10px 10px #ccc;
        }
        .review-data{
            border:1px solid #ccc;
            padding:15px 10px;
            text-align:center;
        }
        .icon-quote-1:before {
            content: '\\201C'; 
            font-size: 120px;
            color: #ccc;
        }
        .review-msg{
            display:block;
            margin-top:-60px;
            font-size:22px;
            color:#22438a;
            line-height:1.6;
            padding:10px;
        }
        .review-name{
            margin-top:20px;
            display:block;
            font-size:18px;
            color:#555;
            line-height:1.7;
        }
        .review-city{
            display:block;
            font-size:16px;
            color:#999;
            line-height:1.7;
        }
        @media(max-width:768px){
            .slider-wrapper {
                height: 230px;
            }
            .review-box {
                width: 75%;
                margin-top: -40px;
            }
        }
        @media(max-width:568px){
            .slider-wrapper {
                height: 400px;
            }
            .review-box {
                width: 95%;
                margin-top: 0px;
            }
            
        .slide.active{
          left:0%;
          width:100%;
          height:100%;
          opacity:1;
          z-index:2;
        }
        }
        .slider-wrapper {
          position:relative;
        }
        .overlay-video-icon{
          top:40%;
          left:47%;
          position:absolute;
          z-index:1000;
          width:100%;
          height:100%;
          tranform:translateX(-50%);
        }
        
        .overlay-video-icon span{
          border:2px solid white;
          padding:20px 18px 18px;
          font-size:20px;
          border-radius:50%;
          color:white;
        }
      `}</style>

      <section id="review">
            <h3 className="heading">Reviews from Residents</h3>
        <div className="slider-wrapper">
          <div className="slider">
            {reviews.map((review, index) => {
              let className = "slide";
              if (index === current) className += " active";
              else if (index === prevIndex) className += " before";
              else if (index === nextIndex) className += " after";

              return (
                <div key={index} className={`${className}`}>
                  <img src={review.img} alt={`slide ${index}`} />
                </div>
              );
            })}
          </div>
          <div className='overlay-video-icon' onClick={popUpHandle}>
            <span><FaPlay /></span>
          </div>
        </div>
        <div className='review-list'>
            <div className='review-box'>
                <div className='review-data'>
                    <div className='icon-quote-1'></div>
                    <span className='review-msg'>{reviews[current].msg}</span>
                    <span className='review-name'>{reviews[current].name}</span>
                    {/* <span className='review-city'>Bharat</span> */}
                </div>
            </div>
        </div>
      </section>
<style>
  {
    `
    #video-popup{
      position:fixed;
      top:0;
      width:100%;
      height:100vh;
      z-index:3000;
      background:rgba(0,0,0,0.8);
      display:flex;
      align-items:center;
      justify-content:center;
    }
    .model-box{
      background:white;
      max-width:1000px;
      padding:20px 20px;
      position:absolute;
    }
    .video-review{
      width:100%;
      aspect-ratio:9/16;
    }
    .overlay-close-popup{
      position:absolute;
      top:0%;
      right:-15px;
      z-index:4000;
    }
    .overlay-close-popup span{
      background:#000;
      color:white;
      border-radius:50%;
      margin-top:10px;
      padding:17px 20px;
    }
    @media(max-width:768px){
      .model-box{
        max-width:94%;
        padding:2%;
      }
    }
    `
  }
</style>
      {popup && 
        <section id="video-popup">
              <div className='model-box'>
                  <iframe className='video-review'
                  src={`https://www.youtube.com/embed/${reviews[current].url}?autoplay=1`}
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen>
                </iframe>
                <div className='overlay-close-popup' onClick={popUpHandle}><span>X</span></div>
              </div>
        </section>
      }
      
    </>
  );
}

export default Review;
