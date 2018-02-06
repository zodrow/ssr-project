import React from 'react';

const AnimationList = ({ animation }) => (
  <div>
    <h1>Dribble Animations</h1>
    <div>
      {animation && animation.map(a => (
        <div className="animation-container" key={a.id}>
          <img src={a.image} />
          <h3 className="title">{a.title} by {a.author}</h3>
        </div>
      ))}
    </div>
  </div>
)

export default AnimationList;