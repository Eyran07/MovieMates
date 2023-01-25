import React from 'react'
import Carousel from '../../Components/Game/Carousel'
import Grades from '../../Components/Game/Grades'
import ProgressBar from '../../Components/Game/ProgressBar'

export default function GamePage() {

    const film = { title: 'Pulp Fiction', img: 'https://cdn.europosters.eu/image/750/posters/pulp-fiction-cover-i1288.jpg' }
    const nextFilm = { title: 'Fight club', img: 'https://img.fruugo.com/product/0/08/14290080_max.jpg' }
    
    const [ratedFilms, setRatedFilms] = useState([]);

    function handleGraging(e) {
        console.log('e.target.id: ' + e.target.id);
    }

    const propsForProgressBar = {
        ratedFilms,
    }

    const propsForCarousel = {
        film,
        nextFilm,
    }

    const propsForGrades = {
        handleGraging,
    }

  return (
    
    <div className='d-flex flex-column'>
        <ProgressBar {...propsForProgressBar} />
        <Carousel {...propsForCarousel} />
        <Grades {...propsForGrades} />
    </div>
  )
}