import journey_1 from './assets/journey-1.svg'
function Journey(){
    return(
        <>
        <style>
            {
                `
                .journey-part-1{
                    background:#22438a;
                    padding:30px 10px;
                    height:350px;
                    z-index:-3;
                     position: relative; 
                }
                 .journey-part-1 .heading{
                    color:white;
                 }
                
                .journey-part-2{
                    margin-top:-230px;
                }
                .journey-item{
                    max-width:980px;
                    margin:0 auto;
                    position:relative;
                    box-shadow:0px 10px 10px #ccc;
                }
                .journey-list{
                    display:flex;
                    flex-wrap:wrap;
                    background:white;
                    padding:10px;
                    z-index:2;
                     position: relative; 
                }
                .journey-box{
                    flex:1 1 30.33%;
                    padding:60px 10px;
                    border-right: 1px solid #ccc; /* Vertical divider */
                    border-bottom: 1px solid #ccc;
                }
                .journey-box:nth-child(3n) {
                    border-right: none;
                }

                .journey-box:nth-last-child(-n+3) {
                    border-bottom: none;
                }
                .journey-box img{
                    width:60px;
                }
                .journey-box-num{
                    color:#22438a;
                    font-size:16px;
                    display:block;
                    line-height:1.8;
                }
                .journey-box-title{
                    color:#333;
                    font-size:16px;
                    display:block;
                    line-height:1.8;
                }
                @media(max-width:568px){
                    
                    .journey-box{
                        flex:1 1 40%;
                    }
                      .journey-box:nth-child(3n),
                        .journey-box:nth-last-child(-n+3) {
                            border-right: 1px solid #ccc;
                            border-bottom: 1px solid #ccc;
                        }
                    .journey-box:nth-child(2n) {
                        border-right: none; /* remove right border for every 2nd box */
                    }
                    .journey-box:nth-last-child(-n+2) {
                        border-bottom: none; /* remove right border for every 2nd box */
                    }
                }
                `
            }
        </style>
            <section id="journey">
                <div className="journey-part-1">
                    <div className="container-fluid">
                        <h3 className="heading">Mapping Our Journey</h3>
                        <p className="subheading">The Experience</p>
                    </div>
                </div>
                <div className="journey-part-2">
                    <div className="container">
                        <div className='journey-item'>
                            <div className="journey-list">
                                <div className="journey-box">
                                    <img src={journey_1} alt="" />
                                    <span className='journey-box-num'>150+</span>
                                    <span className='journey-box-title'>Completed projects</span>
                                </div>
                                <div className="journey-box">
                                    <img src={journey_1} alt="" />
                                    <span className='journey-box-num'>150+</span>
                                    <span className='journey-box-title'>Completed projects</span>
                                </div>
                                <div className="journey-box">
                                    <img src={journey_1} alt="" />
                                    <span className='journey-box-num'>150+</span>
                                    <span className='journey-box-title'>Completed projects</span>
                                </div>
                                <div className="journey-box">
                                    <img src={journey_1} alt="" />
                                    <span className='journey-box-num'>150+</span>
                                    <span className='journey-box-title'>Completed projects</span>
                                </div>
                                <div className="journey-box">
                                    <img src={journey_1} alt="" />
                                    <span className='journey-box-num'>150+</span>
                                    <span className='journey-box-title'>Completed projects</span>
                                </div>
                                <div className="journey-box">
                                    <img src={journey_1} alt="" />
                                    <span className='journey-box-num'>150+</span>
                                    <span className='journey-box-title'>Completed projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Journey;