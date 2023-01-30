import Image from 'next/image';
import profileImg from '../public/images/profile.jpg'

const YourComponent = () => (
  <Image
    src={profileImg} // Route of the image file
    maxH={250} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Diako"
  />
);

export default YourComponent;