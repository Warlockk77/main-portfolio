import React from 'react';
import './portfolio.css';


const data = [
  {id:1 ,
  image:"https://media.istockphoto.com/id/1201598186/vector/leaf-with-barbell-logo-vector-design-for-gym-and-fitness.jpg?s=612x612&w=0&k=20&c=EzDq5Sv-w_ELIvyt-x05cJBa3QjS1eXdk-9lnqr727g=",
title: "Fitness Website" ,
seeProject: "https://warlockk77.github.io/fitness-website/",
github: "https://github.com/Warlockk77" 
},
{id:2 ,
  image:"https://imageio.forbes.com/specials-images/imageserve/638e984730372f722d4072b6/Bitcoin-on-white-background/960x0.jpg?height=711&width=711&fit=bounds",
title: "Crypto Dashboard" ,
seeProject: "https://warlockk77.github.io/crypto-currency-dashboard/",
github: "https://github.com/Warlockk77" 
},
{id:3 ,
  image:"https://media.istockphoto.com/id/1129167962/vector/creative-vector-illustration-of-pixel-glasses-thug-life-meme-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=mv8YHYoDLtjYkboU8dn3yY8OCAzx-D8IUyUXdM-aZrQ=",
title: "Meme Generator" ,
seeProject: "https://warlockk77.github.io/meme-generator-app/",
github: "https://github.com/Warlockk77" 
},
 {id:4 ,
  image:"https://media.istockphoto.com/id/606229300/photo/boy-looking-at-mountains.jpg?s=612x612&w=0&k=20&c=kP7zGnxXWSOoTcpsDGxjwbE6F5l32Grf77H7uuXGiDk=",
title: "Travel Journal" ,
seeProject: "https://warlockk77.github.io/traveljournal/",
github: "https://github.com/Warlockk77" 

},
{id: 5,
  image:"https://img.freepik.com/premium-vector/angry-scream-man-with-beard-headphones_8169-171.jpg",
title: "Music Player" ,
seeProject: "https://warlockk77.github.io/music-player.github.io/",
github: "https://github.com/Warlockk77"  
},
{id:5 ,
  image:"https://static.vecteezy.com/system/resources/previews/011/156/207/original/yoga-meditation-person-logo-sitting-in-nature-illustration-calm-mind-icon-prevent-stress-free-vector.jpg",
title: "Relaxer App" ,
seeProject: "",
github: "https://github.com/Warlockk77" 
},
{id:7 ,
  image:"https://is2-ssl.mzstatic.com/image/thumb/Purple116/v4/8c/b4/18/8cb418f3-731a-419d-e142-e6919446c092/AppIcon-1x_U007emarketing-0-5-0-85-220.png/256x256bb.jpg",
title: "Movie Seat Booking App" ,
seeProject: "https://warlockk77.github.io/seat-booking-app.github.io/",
github: "https://github.com/Warlockk77" 
}
]
 

const Portfolio = () => {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__container'>
   {
    data.map(({id, image, title, github, seeProject}) => {
      return (
        <article className='portfolio__items'>
          <div className='portfolio__item-image'>
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio-item-cta">
            <a href={seeProject} className="btn">See Project</a>
            <a href={github} className="btn btn-primary">Github</a>
          </div>
        </article>
      )
    })
   }



    </div>


    {/* <div className="container portfolio__container">
      <article className='portfolio__items'>
        <div className="portfolio__item-image">
          <img src="https://img.freepik.com/premium-vector/fitness-logo-design-template_416562-591.jpg?w=2000" alt="fitness website" />

        </div>
          <h3>Fitness Website</h3>
          <div className="portfolio-item-cta">
          <a href='' className='btn' target="_blank">See Project</a>
          <a href='https://github.com/Warlockk77' className='btn btn-primary' target="_blank">Github</a>
          </div>
          
       
      </article>
      <article className='portfolio__items'>
        <div className="portfolio__item-image">
          <img src="https://media.istockphoto.com/id/1129167962/vector/creative-vector-illustration-of-pixel-glasses-thug-life-meme-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=mv8YHYoDLtjYkboU8dn3yY8OCAzx-D8IUyUXdM-aZrQ=" />
        </div>
        
          <h3>Meme Generator App</h3>
          <div className="portfolio-item-cta">
          <a href='https://warlockk77.github.io/meme-generator-app/' className='btn' target="_blank">See Project</a>
          <a href='https://github.com/Warlockk77' className='btn btn-primary' target="_blank">Github</a>
        </div>
          
       
      </article>
      <article className='portfolio__items'>
        <div className="portfolio__item-image">
          <img src='https://media.istockphoto.com/id/606229300/photo/boy-looking-at-mountains.jpg?s=612x612&w=0&k=20&c=kP7zGnxXWSOoTcpsDGxjwbE6F5l32Grf77H7uuXGiDk=' />
        </div>
          <h3>Travel Journal</h3>
          <div className="portfolio-item-cta">
          <a href='https://warlockk77.github.io/traveljournal/' className='btn' target="_blank">See Project</a>
          <a href='https://github.com/Warlockk77' className='btn btn-primary' target="_blank">Github</a>
          </div>
          
       
      </article>
      <article className='portfolio__items'>
        <div className="portfolio__item-image">
          <img src='https://img.freepik.com/premium-vector/angry-scream-man-with-beard-headphones_8169-171.jpg' />
        </div>
          <h3>Music Player</h3>
          <div className="portfolio-item-cta">
          <a href='https://warlockk77.github.io/music-player.github.io/' className='btn' target="_blank">See Project</a>
          <a href='https://github.com/Warlockk77' className='btn btn-primary' target="_blank">Github</a>
          </div>
          
       
      </article>
      <article className='portfolio__items'>
        <div className="portfolio__item-image">
          <img src='https://static.vecteezy.com/system/resources/previews/011/156/207/original/yoga-meditation-person-logo-sitting-in-nature-illustration-calm-mind-icon-prevent-stress-free-vector.jpg' />
        </div>
          <h3>Relaxer App</h3>
          <div className="portfolio-item-cta">
          <a href='' className='btn' target="_blank">See Project</a>
          <a href='https://github.com/Warlockk77' className='btn btn-primary' target="_blank">Github</a>
          </div>
          
       
      </article>
      <article className='portfolio__items'>
        <div className="portfolio__item-image">
          <img src='https://inc42.com/wp-content/uploads/2019/04/movie-ticketing.jpg' />
        </div>
          <h3>Movie Seat Booking App</h3>
          <div className="portfolio-item-cta">
          <a href='https://warlockk77.github.io/seat-booking-app.github.io/' className='btn' target="_blank">See Project</a>
          <a href='https://github.com/Warlockk77' className='btn btn-primary' target="_blank">Github</a>
          </div>
          
       
    </article> */}

    {/* </div> */}
   </section>
  )
}

export default Portfolio