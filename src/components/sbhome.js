import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import umppic from '../images/USAUmpire.jpg';

class SBHome extends Component {
  render() {
    return (
      <div className="container-fluid">
        <article className='col-sm-2'></article>
        <article className='col-sm-8'>
          <Image src={umppic} className='usa-sb-ump' responsive />
          <p className='ump-article'>The USA Softball umpire program is among the nation's largest officiating organizations with over 26,000 officials actively involved each year. USA Softball umpires are nationally recognized as the best trained and proficient in the sport and are involved in competition starting with league play, city, state and national championships. Ultimately, USA Softball umpires could officiate events such as world championship, Pan American and Olympic competitions.
USA Softball annually hosts local, state and national umpire clinics which literally blanket the nation and bring the best instruction available in the sport to every region. Over the last decade, USA Softball's umpire program has become an innovator in the production of quality training materials. When a clinic is not available - videos, books, slides and other instructional aids allow instruction to continue. Visit www.officialgear.com as a one stop shop for all your USA Softball Umpire Apparel and Equipment needs. Click here to view the 2017 Umpire Catalog.</p>
        </article>
      </div>
      
    );
  }
}

export default SBHome;