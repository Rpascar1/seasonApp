import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {
      text:"Let's hit the beach!",
      iconName:'sun'
    },
    winter: {
      text:'Burr, it is chilly',
      iconName:'snowflake'
    },

}
const getSeason = (lat, month)=>{
  if (month > 2 && month < 9){
    return lat > 0 ? 'summer': 'winter'
  } else {
    return lat > 0 ? 'winter':'summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const {text, iconName} = seasonConfig[season]
  // const text = season === 'winter' ? seasonConfig.winter.text : seasonConfig.summer.text
  // const icon = season === 'winter' ? seasonConfig.winter.iconName : seasonConfig.summer.iconName
  return(
    <div>
    <div className= {`season-display ${season}`}>
    <i className={`icon-left spinning huge ${iconName} icon`}/>
      <h1>{text}</h1>
      <i className={`icon-right spinning huge ${iconName} icon`}/>
      </div>
    </div>
    )
  }


export default SeasonDisplay
