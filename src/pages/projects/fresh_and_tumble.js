import React from 'react';
import ReusableHelmet from '../../components/ReusableHelmet';
import ProjectPageTemplate from '../../components/projects/ProjectPageTemplate';
import Footer from '../../components/Footer';

// static assets
import mockupImg from '../../../static/etc/images/project_images/fresh_and_tumble/phone-mockup.png';
import baseline_grid_img from '../../../static/etc/images/project_images/flex_mate/8px-grid.png';
import gutter_img from '../../../static/etc/images/project_images/flex_mate/16px-grid.png';
import vertical_rhythm_img from '../../../static/etc/images/project_images/flex_mate/48px-grid.png';
import typography_image from '../../../static/etc/images/project_images/flex_mate/typography-system.png';
import flow_chart_small_screen_img from '../../../static/etc/images/project_images/flex_mate/flow-chart-small-screen.png';
import flow_chart_large_screen_img from '../../../static/etc/images/project_images/flex_mate/flow-chart-large-screen.png';
// stylesheet
import '../index-css.module.css';
import HeroHeader from '../../components/general/HeroHeader';

const FreshAndTumble = () => (
  <div className="w-full">
    <ReusableHelmet title={'Flex Mate App'} description={'Flex Mate App'} />
    <HeroHeader highlighted={'home'} />
    <ProjectPageTemplate
      primary_color="#D70CF5"
      mockupImg={mockupImg}
      title="FRESH AND TUMBLE"
      project_date="2019 - 2021"
      try_url={''}
      description="Uber of Laundry is pretty self-explanatory, but there's a lot of exciting tech under the hood that powers Fresh And Tumble Laundry Pickups and Deliveries, all of which were built in-house and proprietary, so they do not rely on any costly premade delivery api solutions. Fresh And Tumble has automated systems that provide real-time estimations and enroute map visualization for customers to observe during their laundry pickup including an SMS notification that their Wash Expert is approaching their doorstep for pickup. The SMS notification system would soon become an important tool for facilitating contact-free pickups and deliveries during the COVID-19 pandemic. Pickups and deliveries are protected, tracked and confirmed via geofencing, QR scanning and time windows. Fresh And Tumble also has support for billing and subscription payment services for customers, as well as a full-featured mobile App for Independent Wash Experts (Similar to Uber Drivers) to facilitate and manage their orders including real-time turn-by-turn navigation powered by MapBox Navigation SDK and an earnings payout system powered by Stripe Connect."
      scope_array={[
        'Pickup/Delivery',
        'Appointments',
        'Geofencing',
        'QR Scanning',
        'Navigation',
        'Billing/Subscriptions',
      ]}
      core_tech_array={[
        'Ruby on Rails 6',
        'SideKiq',
        'Docker',
        'React Native',
        'Twilio Sendgrid',
        'Mapbox Navigation SDK',
        'Stripe/Stripe Connect',
      ]}
      apps_used_array={['Adobe XD', 'VIM', 'XCode', 'Android Studio']}
      features_array={[
        'Fuel cost estimation',
        'Real-Time travel time estimatinos',
        'Show job types by station',
        'Multiple region coverage',
      ]}
      metrics={{
        baseline_grid: '8px',
        baseline_grid_img: baseline_grid_img,
        gutter: '16px',
        gutter_img: gutter_img,
        vertical_rhythm: '48px',
        vertical_rhythm_img: vertical_rhythm_img,
      }}
      colors_array={[
        {
          label: 'Primary',
          labelcolor: 'white',
          color: '#FE8B10',
        },
        {
          label: 'Flash',
          labelcolor: 'white',
          color: '#FF0000',
        },
        {
          label: 'Text/BG',
          labelcolor: 'white',
          color: '#000000',
        },
      ]}
      typography_image={typography_image}
      flowchart_small_screen_img={flow_chart_small_screen_img}
      flowchart_large_screen_img={flow_chart_large_screen_img}
    />
    <Footer />
  </div>
);

export default FreshAndTumble;
