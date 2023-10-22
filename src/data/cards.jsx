import base1 from '../assets/data5.jpg'
import base2 from '../assets/data3.jpeg'
import { FaServer } from 'react-icons/fa'
import { BsFillHddNetworkFill } from 'react-icons/bs'
export const cards = [
  {
    id: 1,
    title: 'Innovation Leaders',
    icon: <FaServer className="w-6 h-6" />,
    image: base1,
    description:
      'We lead the way with the latest tech for peak data center efficiency and security',
  },
  {
    id: 2,
    title: 'Industry Experts',
    icon: <BsFillHddNetworkFill className="w-6 h-6" />,
    image: base2,
    description:
      'Our seasoned professionals guarantee top-tier results for your data center.',
  },
]
