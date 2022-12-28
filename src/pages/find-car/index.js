import {React, useState} from 'react';
import HeroSection from '../../components/main/hero-section';
import FindResult from '../../components/sub/find-result';
import Greyarea from '../../components/sub/greyarea';

const FindCar = () => {
  const [heroVisible, setHeroVisible] = useState(true)


  return (
    <div className='find-car'>
      {!heroVisible && <Greyarea />}
      {heroVisible && <HeroSection />}
      <FindResult setHeroVisible={setHeroVisible} />
      
    </div>
  )
};

export default FindCar;