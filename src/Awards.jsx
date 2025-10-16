import awards_img from './assets/award.jpg'
function Awards(){
    const awards = [
        {
            name:"Trusted Developer in South India",
            type:"",
        },
        {
            name:"Sustainable Construction Champion",
            type:"",
        },
        {
            name:"Excellence in Urban Development",
            type:"",
        },
        {
            name:"Customer-Centric Real Estate Brand",
            type:"",
        },
    ]
    return(
        <>
        <style>
            {
                `
                #awards{
                    padding:60px 10px;
                }
                .awards-list{
                    display:flex;
                    flex-wrap:wrap;
                    gap:20px;
                    margin-top:60px;
                }
                .awards-box{
                    flex:1 1 calc(25% - 22px);
                }
                .awards-box img{
                    width:80px;
                    margin-bottom:10px;
                }
                .awards-box-title{
                    display:block;
                    line-height:1.7;
                    color:#22438a;
                }
                .awards-box-des{
                    display:block;
                    line-height:1.5;
                    color:#999;
                    font-size:15px;
                    padding:0px 20px;
                }
                @media(max-width:568px){
                    
                .awards-box{
                    flex:1 1 calc(46% - 22px);
                }
                }
                `
            }
        </style>
        <section id="awards">
            <div className="container">
                <h3 className="heading">Awards & Recognition</h3>
                <p className="subheading">Merits we have earned</p>
                <div className="awards-list">
                    {awards.map((award, index) => (
                    <div className="awards-box">
                        <img src={awards_img} alt="" />
                        <span className="awards-box-title">{award.name}</span>
                        <span className="awards-box-des">Excellence in Customer Service- PS GROUP</span>
                    </div>
                    ))}
                </div>
                    {/* <div className='more'>
                        <a href="">SHOW ME MORE AWARDS </a>
                    </div> */}
            </div>
        </section>
        </>
    )
}
export default Awards;