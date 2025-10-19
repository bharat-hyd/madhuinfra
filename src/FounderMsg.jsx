import founder from './assets/founder.jpg'

function FounderMsg(){
    return (
        <>
        <style>
            {
                `
                #FounderMsg{
                    background:#22438a;
                    padding:60px 10px;
                }
                .FounderMsg-block{
                    display:flex;
                    flex-wrap:wrap;
                
                }
                .FounderMsg-left{
                    flex:0 0 40%;
                }
                .FounderMsg-left img{
                    width:100%;
                }
                .FounderMsg-right{
                    padding:20px;
                    box-sizing:border-box;
                    flex:0 0 60%;
                    display:flex;
                    flex-wrap:wrap;
                    flex-direction:column;
                    justify-content:center;
                    align-items:flex-start;
                    text-align:left;
                }
                .FounderMsg-right h3{
                    color:white;
                    margin-top: -15px;
                }
                .FounderMsg-right p{
                    color:#ddd;
                    font-size:18px;
                    line-height:1.6;
                    margin-top:-10px;
                }
                .FounderMsg-name{
                    font-size:18px;
                    color:blue;
                    display:block;
                    color:#f90;
                    line-height:1.5;
                }
                .FounderMsg-post{
                    font-size:18px;
                    color:white;
                    display:block;
                    line-height:1.5;
                }
                @media(max-width:768px){
                
                .FounderMsg-left{
                    flex:0 0 100%;
                }
                
                .FounderMsg-right{
                    flex:0 0 100%;
                }
                }
                `
            }
        </style>
        <section id="FounderMsg">
            <div className="container">
                <div className="FounderMsg-block">
                    <div className="FounderMsg-left">
                        <img src={founder} alt="" />
                    </div>
                    <div className="FounderMsg-right">
                        <h3 className='heading'>Founders message </h3>
                        <p>When I found Madhu Infra, my vision was never limited to constructing buildings.It was about creating spaces where lives could flourish and communities could thrive. My journey from healthcare to real estate has always been driven by one belief: that the environments we build have the power to shape futures, nurture relationships, and inspire generations.</p>
                        <span className="FounderMsg-name">Dr Vasu Chebrolu</span>
                        <span className="FounderMsg-post">Founder</span>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default FounderMsg;