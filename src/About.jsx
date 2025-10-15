function About(){
    const impacts = [
        {
            num:"🏗️ 86+",
            title:"Completed Projects",
        },
        {
            num:"🌆 4",
            title:"Cities",
        },
        {
            num:"🥇 200+",
            title:"Awards & Recognitions ",
        },
        {
            num:"😊 2,000,000+",
            title:"Happy Customers",
        },
        {
            num:"🏆 2",
            title:"Decades of Experience",
        },
        {
            num:"🏗️ 10+",
            title:"Green Buildings",
        },
    ]
    return (
        <>
        <style>
            {
                `
                #about{
                    background:#22438a;
                    padding:60px 10px;
                }
                 #about .heading{
                 color:white;
                }
                .about-block{
                    display:flex;
                    flex-wrap:wrap;
                    background:white;
                }
                .about-left{
                    flex:0 0 50%;
                    display:flex;
                    flex-wrap:wrap;
                    flex-direction:column;
                    justify-content:center;
                    align-items:flex-start;
                    text-align:left;
                    padding:30px 30px;
                    box-sizing:border-box;
                }
                .about-left h3{
                    font-size:20px;
                    line-height:1;
                    color:#22438a;
                }
                .about-left p{
                    line-height:1.5;
                    color:#999;
                    margin-top:-1px;
                }
                .about-left a{
                    padding:13px 17px;
                    display:inline-block;
                    background:#f90;
                    color:white;
                }
                .about-right{
                    flex:0 0 50%;
                    padding:30px 10px;
                    box-sizing:border-box;
                }
                .about-right-list{
                    display:flex;
                    flex-wrap:wrap;
                }
                .about-right-box{
                    flex:0 0 45%;
                    margin:0 auto;
                    padding:10px;
                    text-align:left;
                    padding:20px 20px;
                    box-sizing:border-box;
                }
                .about-right-num{
                    display:block;
                    font-size:18px;
                    line-height:2.5;
                    color:#22438a;
                }
                .about-right-title{
                    display:block;
                    font-size:18px;
                    line-height:1.5;
                    color:#f90;
                }
                `
            }
        </style>
        <section id="about">
            <div className="container">
                <h3 className="heading">Who we are</h3>
                <p className="subheading">Merits we have earned</p>
                <div className="about-block">
                    <div className="about-left">
                        <h3>Building Trust and Turning Dreams into Homes.</h3>
                        <p>Madhu Infrastructure is a team of professionals committed to a single principle:that everyone deserves a safe,well-maintained and affordable place to call home. Operating as an ethical and integrated developer in South India, we approach every project with meticulous care,focusing on the people who will live there.Our work is guided by integrity and the belief that by maintaining the highest standards in construction, we are actively contributing to the development of vibrant, stable communities for the future.</p>
                        <a href="">Know more</a>
                    </div>
                    <div className="about-right">
                        <div className="about-right-list">
                            {impacts.map((impact,index) => (
                            <div className="about-right-box" key={index}>
                                <span className="about-right-num">{impact.num}</span>
                                <span className="about-right-title">{impact.title}</span>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default About;