import { useState, useEffect } from 'react';
import img_1 from './assets/review_img_1.jpg';
import img_2 from './assets/review_img_2.jpg';
import img_3 from './assets/review_img_3.jpg';
import img_4 from './assets/review_img_4.jpg';

function Review() {
  const reviews = [
    {
      name:"Deepak",
      post:"",
      msg:"Choosing Madhu Infra was the best decision for my family. The team delivered on time and the quality is exactly what was promised.",
      img:img_1,
    },
    {
      name:"Karthik",
      post:"",
      msg:"We love how conveniently Parkville is located right between Hitech City and Gachibowli, so everything we need is just minutes away.",
      img:img_2,
    },
    {
      name:"Sudheer",
      post:"",
      msg:"Our apartment is spacious and filled with sunlight. It's a joy to wake up here every morning.",
      img:img_3,
    },
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // autoplay every 3s
    return () => clearInterval(interval);
  }, []);

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
                <div key={index} className={className}>
                  <img src={review.img} alt={`slide ${index}`} />
                </div>
              );
            })}
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
    </>
  );
}

export default Review;
