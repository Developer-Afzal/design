import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import profile from "../assets/Images/profile.svg";
import Button from "../Components/Commons/Button";
import TLogo1 from '../assets/Images/T-logo1.svg'
import TLogo2 from '../assets/Images/T-logo2.svg'
import TLogo3 from '../assets/Images/T-logo3.svg'
import TLogo4 from '../assets/Images/T-logo4.svg'
import TLogo5 from '../assets/Images/T-logo5.svg'
import Feature1 from '../assets/Images/Feature1.svg'
import Feature2 from '../assets/Images/Feature2.svg'
import Feature3 from '../assets/Images/Feature3.svg'
import Feature4 from '../assets/Images/Feature4.svg'
import portfolio1 from '../assets/Images/portfolio1.svg'
import portfolio2 from '../assets/Images/portfolio2.svg'
import portfolio3 from '../assets/Images/portfolio3.svg'
import portfolio4 from '../assets/Images/portfolio4.svg'
import portfolio5 from '../assets/Images/portfolio5.svg'
import portfolio6 from '../assets/Images/portfolio6.svg'
import BlogsImg1 from '../assets/Images/BlogsImg1.svg'
import BlogsImg2 from '../assets/Images/BlogsImg2.svg'
import image16 from '../assets/Images/image16.png'
import image17 from '../assets/Images/image17.png'
import comma from '../assets/Images/comma.svg'
import star from '../assets/Images/star.svg'
import downarrow from '../assets/Images/downarrow.svg'
import user1 from '../assets/Images/user1.svg'
import user2 from '../assets/Images/user2.svg'
import user3 from '../assets/Images/user3.svg'
const Dashboard = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive:[
      {
          breakpoint:1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
      },

      {
          breakpoint:1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
      },
      
      {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        
        },
  ]
  };
  return (
    <>
      <Container className="banner">
        <Row className="m-0 p-0">
          <Col md={7}   xl={6} className="col-12  bannerLeft-content p-0 text-center text-md-start">
            <p className="text-center d-none d-md-block">MIAMI</p>
            <p className="Black text-center">
              WALKE<span className="Black">R</span>
            </p>

            <p className="text-center text-sm-start">
              Award Wining product designer based in Georgia. We create
              user-friendly interfaces for fast-growing startups.
            </p>
            <Button data={"Book A Call"} />
          </Col>
          <Col md={5}  xl={6} className="col-12 bannerRight-content px-4 p-md-0">
            <img className="w-100" src={profile} alt="profile" />
            <p className="d-md-none text-center">MIAMI</p>
          </Col>
        </Row>
      </Container>
      <Container className="TrustedBrand-Block">
        <Row className="m-0 p-0">
          <Col sm={12} className="text-center">
            <p>Trusted By</p>
          </Col>
          <Col sm={12} className="_Flex justify-content-between gap-3">
            <Col className="d-none d-md-block"><img src={TLogo1} className="w-100"/></Col>
            <Col><img src={TLogo2} className="w-100"/></Col>
            <Col><img src={TLogo3} className="w-100"/></Col>
            <Col><img src={TLogo4} className="w-100"/></Col>
            <Col className="d-none d-md-block"><img src={TLogo5} className="w-100"/></Col>
          </Col>
        </Row>
      </Container>
      <Container className="Features-block">
        <Row className="m-0 p-0">
          <Col sm={5} className="left-content col-12 px-4 p-md-0">
            <p className="small-heading">FEATURES</p>
            <p className="heading">Giving Your Business <br/> Some Great Ideas</p>
            <p>
              Every designer needs the right tools to do the perfect job.
              Thankfully, we can do that. I design products that are more than
              pretty. I make them shippable and usable.
            </p>
            <Button data={"Contact US"} />
          </Col>
          <Col sm={7} className="right-content col-12 px-4  p-md-0">
            <Row className="m-0 p-0">
              <Col sm={6} className="col-12 leftSection">
                <Col>
                  <img src={Feature1} alt="feature" className="w-100" />
                  <p className="subheading">UX Experience </p>
                  <p>
                    I design products that are more than pretty. I make them
                    usable.
                  </p>
                </Col>
                <Col>
                  <img src={Feature2} alt="feature" className="w-100" />
                  <p  className="subheading">Product Analysis</p>
                  <p>
                    I design products that are more than pretty. I make them
                    usable.
                  </p>
                </Col>
              </Col>
              <Col sm={6} className="rightSection col-12 p-0">
                <Col className="ps-sm-4">
                  <img src={Feature3} alt="feature" className="w-100" />
                  <p className="subheading">UI Design</p>
                  <p>
                    I design products that are more than pretty. I make them
                    usable.
                  </p>
                </Col>
                <Col className="ps-sm-4">
                  <img src={Feature4} alt="feature" className="w-100" />
                  <p className="subheading">Product Design</p>
                  <p>
                    I design products that are more than pretty. I make them
                    usable.
                  </p>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="Workrecords-Block d-none d-md-block">
        <Row className="m-0 p-0">
          <Col sm={12} className="_Flex justify-content-between">
            <Col className="text-center Workrecords-content">
              <p className="p-0 m-0">12K+</p>
              <p>Project Complete</p>
            </Col>
            <Col className="text-center Workrecords-content">
              <p className="p-0 m-0">12K+</p>
              <p>Happy Client</p>
            </Col>
            <Col className="text-center Workrecords-content">
              <p className="p-0 m-0">10+</p>
              <p>Years Experience</p>
            </Col>
            <Col className="text-center Workrecords-content">
              <p className="p-0 m-0">270+</p>
              <p>Win Awards</p>
            </Col>
          </Col>
        </Row>
      </Container>
      <Container className="portfolio">
        <Row className="m-0 pb-4">
          <Col md={6} className="col-12">
            <p className="small-heading">PORTFOLIO</p>
            <p className="heading">Some Of Our Best Works </p>
          </Col>
          <Col md={6} className="col-12 text-end _Flex justify-content-start justify-content-md-end">
            <Button data={"Load More"} />
          </Col>
        </Row>
        <Row className="portfolio-content  m-0">
          <Col sm={5} className="col-12  m-0">
            <img src={portfolio1} />
          </Col>
          <Col sm={4} className="col-12 m-0">
            <img src={portfolio2}/>
          </Col>
          <Col sm={3} className="col-12 m-0">
            <img src={portfolio3} className="w-100 h-100" />
          </Col>
          {/* <Col className="col-12 d-sm-none">
            <img src={portfolio6} />
          </Col> */}
        </Row>
        <Row className="portfolio-content  m-0">
        <Col sm={3} className="d-none d-md-block ">
            <img src={portfolio4} />
          </Col>
          <Col sm={4} className=" d-none d-md-block ">
            <img src={portfolio5} />
          </Col>
          <Col sm={5} className="d-none d-md-block">
            <img src={portfolio6} />
          </Col>
        </Row>
        {/* <Row className="portfolio-content d-none d-md-flex  m-0">
          <Col sm={5} className="col-12 p-0 m-0">
            <img src={portfolio1} className="w-100 "/>
          </Col>
          <Col sm={4} className="col-12 p-0 m-0">
            <img src={portfolio2} className="w-100 "/>
          </Col>
          <Col sm={3} className="col-12 p-0 m-0 ">
            <img src={portfolio3} className="w-100"/>
          </Col>
        </Row> */}
      </Container> 
      <Container className="Blogs-bLock" fluid>
        <Row className="m-0 pb-5 px-sm-4">
          <Col className="col-12 col-md-6">
            <p className="small-heading">LATEST BLOG</p>
            <p className="heading">Check Some of Latest <br/> News & Articles</p>
          </Col>
          <Col className="col-12 col-md-6 pb-5 pb-md-0 position-relative">
            <div className="_Button pe-5">
            <Button data={"Load More"} />
            </div>
          </Col>
        </Row>
        <Row className="blogs-content _Flex  m-0 p-0">
          <Col sm={5} className="col-12 Item-box h-auto">
            <img src={image16} />
              <div>
              <p>UI Design | 22 May 2023</p>
            <p>What is UI Design in Front End Design?</p>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
            <p>READ MORE</p>
              </div>
          </Col>
          <Col sm={5} className="col-12 Item-box h-auto">
            <img src={image17} />
              <div>
              <p>UI Design | 22 May 2023</p>
            <p>What is UI Design in Front End Design?</p>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
            <p>READ MORE</p>
              </div>
          </Col>
          <Col sm={5} className="Item-box d-none d-sm-block h-auto">
            <img src={image16} />
              <div>
              <p>UI Design | 22 May 2023</p>
            <p>What is UI Design in Front End Design?</p>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
            <p>READ MORE</p>
              </div>
          </Col>
          <Col sm={5} className="Item-box d-none d-sm-block h-auto">
            <img src={image17} />
              <div>
              <p>UI Design | 22 May 2023</p>
            <p>What is UI Design in Front End Design?</p>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
            <p>READ MORE</p>
              </div>
          </Col>
          <Col sm={5} className="Item-box d-none d-sm-block h-auto">
            <img src={image16} />
              <div>
              <p>UI Design | 22 May 2023</p>
            <p>What is UI Design in Front End Design?</p>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
            <p>READ MORE</p>
              </div>
          </Col>
          <Col sm={5} className="Item-box d-none d-sm-block">
            <img src={image17} />
              <div>
              <p>UI Design | 22 May 2023</p>
            <p>What is UI Design in Front End Design?</p>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system
            </p>
            <p>READ MORE</p>
              </div>
          </Col>
        </Row>
      </Container>
       {/* testimonial code starts here*/}
      <Container className="testimonial-block py-4" fluid>
        <Row className="m-0 p-0">
            <Col className="text-center col-12"> <p className="small-heading">Testimonials</p>
              <p className="heading">What our customer say</p></Col>
        </Row>
        <Slider className='mx-auto slider my-4' {...settings}>
        <Col  className="col-12 my-4 border-1 px-1">
          <img src={comma}/>
          <p>“Now, i can track my business activity with easier and have a great understandable to operate the products</p>
          <div className="_Flex justify-content-between"><span> <img src={user1} className="pe-2"/>Berry Gunawan</span> <span className="pe-2"><img src={star}/>3.5</span></div>
          </Col>
        <Col className="col-12 my-4 border-1 px-1">
          <img src={comma}/>
            <p>“Now, i can track my business activity with easier and have a great understandable to operate the products</p>
            <div className="_Flex justify-content-between"><span> <img src={user2} className="pe-2"/>Cobocannaeru</span> <span className="pe-2"><img src={star}/>3.5</span></div>
          </Col>
        <Col className="col-12 my-4 border-1 px-1">
          <img src={comma}/>
          <p>“Now, i can track my business activity with easier and have a great understandable to operate the products</p>
          <div className="_Flex justify-content-between"><span> <img src={user3} className="pe-2"/>Berry Gunawan</span> <span className="pe-2"><img src={star}/>3.5</span></div>
          </Col>
        </Slider>
          {/* <Col md={4} className="col-12 my-4 border-1 ">
          <img src={comma}/>
          <p>“Now, i can track my business activity with easier and have a great understandable to operate the products</p>
          <div className="_Flex justify-content-between"><span> <img src={user1} className="pe-2"/>Berry Gunawan</span> <span className="pe-2"><img src={star}/>3.5</span></div>
          </Col>
          <Col md={4} className="col-12 my-4 border-1 ">
          <img src={comma}/>
            <p>“Now, i can track my business activity with easier and have a great understandable to operate the products</p>
            <div className="_Flex justify-content-between"><span> <img src={user2} className="pe-2"/>Cobocannaeru</span> <span className="pe-2"><img src={star}/>3.5</span></div>
          </Col>
          <Col md={4} className="col-12 my-4 border-1">
          <img src={comma}/>
          <p>“Now, i can track my business activity with easier and have a great understandable to operate the products</p>
          <div className="_Flex justify-content-between"><span> <img src={user3} className="pe-2"/>Berry Gunawan</span> <span className="pe-2"><img src={star}/>3.5</span></div>
          </Col> */}
      </Container>
      <Container className="Faq-block" fluid>
        <Row className="p-0 m-0">
          <Col className="FAQleft-content col-12 col-md-6 order-2 order-md-1">
            <div className="_Flex justify-content-between"><p className="m-0">How can we help your business? </p><img src={downarrow}/></div>
            <div className="_Flex justify-content-between"><p className="m-0">What are the advantages of Bisnext </p><img src={downarrow}/></div>
            <div className="_Flex justify-content-between"><p className="m-0">Let’s find an office near you? </p><img src={downarrow}/></div>
            <div className="_Flex justify-content-between"><p className="m-0">How IT consultancy experts work? </p><img src={downarrow}/></div>
          </Col>
          <Col className="FAQright-content col-12 col-md-6 order-1 order-md-2">
            <p className="small-heading">FAQS</p>
            <p className="py-0 m-0">Be Kind to Your Mind Question & Answer</p>
            <p>All Your Qustions are in A document, in question and answer format, that introduces newcomers to a topic or answers common questions.</p>
          </Col>
        </Row>
      </Container> 
    </>
  );
};

export default Dashboard;
