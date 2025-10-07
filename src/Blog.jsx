import blog_1 from './assets/blog_1.jpg'
import blog_2 from './assets/blog_2.jpg'
import blog_3 from './assets/blog_3.jpg'
function Blog(){
    return (
        <>
        <style>
            {
                `
                .blog-list{
                    display:flex;
                    flex-wrap:wrap;
                    gap:40px;
                    max-width:1000px;
                    margin:0 auto;
                }
                .blog-box img{
                    width:100%;
                    height:100%;
                    object-fit:cover;

                }
                .blog-box-title{
                    font-size:18px;
                    line-height:1.5;
                    color:#22438a;
                    text-align:left;
                }
                .blog-box-details{
                    font-size:16px;
                    line-height:1.5;
                    text-align:left;
                }
                .highlight{
                    font-weight:bold;
                }
                .blog-box{
                    flex:1 1 calc(48.33% - 75px);
                    padding:30px;
                    box-shadow:0px 10px 10px #ccc;
                }
                .blog-box {
                    position:relative;
                    background:white;
                }
                .blog-box:after {
                    content:"";
                    position:absolute;
                    width:100%;
                    height:100%;
                    transform:translate(-18px, -18px);
                    transition:opacity 0.9s ease;
                    top:0;
                    left:0;
                    right:0;
                    z-index:-1;
                    opacity:0;
                    border:1px solid #ddd;
                }
                .blog-box:hover:after {
                    opacity:1;
                }
                `
            }
        </style>
        <section id="blog">
            <div className="container">
                <h3 className="heading">Blog & Updates</h3>
                <div className="blog-list">
                    <div className="blog-box">
                        <div className='blog-box-img'>
                            <img src={blog_1} alt="" />
                        </div>
                        <h4 className="blog-box-title">Looking for ready to move flats in New Alipore: We bet Vyom is all you want</h4>
                        <p className="blog-box-details">
                            By <span class="highlight">Pratik Balasaria</span> on <span class="highlight">26 Nov</span>
                        </p>
                    </div>
                    <div className="blog-box">
                        <div className='blog-box-img'>
                            <img src={blog_2} alt="" />
                        </div>
                        <h4 className="blog-box-title">Looking for ready to move flats in New Alipore: We bet Vyom is all you want</h4>
                        <p className="blog-box-details">
                            By <span class="highlight">Pratik Balasaria</span> on <span class="highlight">26 Nov</span>
                        </p>
                    </div>
                </div>
                    <div className='more'>
                        <a href="">SHOW ME MORE BLOGS </a>
                    </div>
            </div>
        </section>
        </>
    )
}
export default Blog;