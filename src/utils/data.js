// import icons
import {
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaDiscord,
} from 'react-icons/fa';


import images from './images';

 const navData = [
  { href: '/', name: 'home' },
  { href: 'about', name: 'about' },
  { href: 'menu', name: 'menu' },
  { href: 'team', name: 'team' },
  { href: 'testimonials', name: 'testimonials' },
  { href: 'book', name: 'book a table' },
  { href: 'contact', name: 'contact' },
];

 const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Bistro Cafe',
  subtitle:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  btnText: 'Find out more',
};

 const socialData = [
  { href: '/', icon: <FaYoutube /> },
  { href: '/', icon: <FaFacebookF /> },
  { href: '/', icon: <FaInstagram /> },
  { href: '/', icon: <FaPinterestP /> },
  { href: '/', icon: <FaDiscord /> },
];

 const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur, quasi minima molestiae ex exercitationem culpa quisquam architecto quaerat, iusto dolores labore, sapiente magni rem commodi aperiam ad dolorem neque ducimus. Placeat vel non quod quis pariatur a aperiam, aliquam adipisci voluptatum voluptatem sit cupiditate dolore natus beatae earum omnis.',
  btnText: 'find out more',
  image: images.AboutImg,
};

 const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: 'view all menu for tasty meal today',
  modelImg: images.ModelWhiteImg,
  btnText: 'view complete menu',
  menuItems: [
    {
      image: images.MenuImg1,
      name: 'Chocolate Cake',
      price: '$7.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: images.MenuImg2,
      name: 'Veggie Burger',
      price: '$9.49',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: images.MenuImg3,
      name: 'King Burger',
      price: '$8.50',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: images.MenuImg4,
      name: 'Mexican Burger',
      price: '$9.99',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
  ],
};

 const teamData = {
  pretitle: 'our team',
  title: 'meet our chef',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  name: 'sara peter',
  occupation: 'executive chef',
  signatureImg: images.SignatureImg,
  chefImg: images.ChefImg,
};

 const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: images.ModelWhiteImg,
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: images.Avatar1,
      name: 'Rick Thompson',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: images.Avatar2,
      name: 'John Doe',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: images.Avatar3,
      name: 'Henry A.',
      occupation: 'CEO of Delightful',
    },
  ],
};

 const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: images.ModelBlackImg,
  btnText: 'make a reservation',
};

 const newsletterData = {
  title: 'join our newsletter',
  subtitle: 'Get latest news & updates in your inbox.',
  placeholder: 'Subscribe our delicious dishes',
  btnText: 'subscribe now',
};

 const footerData = {
  contact: {
    title: 'contact location',
    address: '3784 patterson road, #8 new york, CA 69000',
    phone: '(201)256-3689',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaYoutube /> },
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
      { href: '/', icon: <FaPinterestP /> },
      { href: '/', icon: <FaDiscord /> },
    ],
  },
};


const data = {
  heroData,
  aboutData,
  menuData,
  socialData,
  newsletterData,
  footerData,
  navData,
  teamData,
  reservationData,
  testimonialData
}

export default data
