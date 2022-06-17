import React from 'react';

import Header from './header/header';
import Header_line from './header_line/header_line';
import About_us from './about_us/about_us';
import Stomach_line from './stomach_line/stomach_line';
import Our_menu from './our_menu/our_menu';
import Testimonials from './testimonials/testimonials';
import Faq from './faq/faq';
import Find_us from './find_us/find_us';
import Subs from './subs/subs';

export default function App_main_content () {
    return (
        <div>
          <Header />
          <Header_line />
          <About_us />
          <Stomach_line /> 
          <Our_menu />
          <Testimonials /> 
          <Faq />
          <Find_us />   
          <Subs />
        </div>
    )
}

