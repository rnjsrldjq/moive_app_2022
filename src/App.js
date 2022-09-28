import PropTypes from 'prop-types';
import React from 'react';

function Food({name,picture,rating})
{
  return (
  <div>
  <h2>It's {name}</h2>
  <h3>{rating}/5.0</h3>
  <img width="120" height="202" src={picture} alt={name}/>
  </div>
  );
}

const foodILike = [
  { 
    id:1,
    name: '준서',
    image: 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
    rating:0.5,
  },
  {
    id:2,
    name: 'ine',
    image: 'https://ifh.cc/g/akXjZX.jpg',
    rating:5,
  },


];


function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
     {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
    
    </div>

  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;

