import Image from 'next/image';
import Link from 'next/link';

const Socials = () => (
  <div className="flex gap-4">
    <span className="flex">
      <Image
        className="mr-2"
        alt="Instagram Icon"
        src="/instagram.svg"
        width={20}
        height={20}
      />
      <Link href="#">Instagram</Link>
    </span>
    <span className="flex">
      <Image
        className="mr-2"
        alt="GitHub Icon"
        src="/github.svg"
        width={20}
        height={20}
      />
      <Link href="#">GitHub</Link>
    </span>
    <span className="flex">
      <Image
        className="mr-2"
        alt="Linkedin Icon"
        src="/linkedin.svg"
        width={20}
        height={20}
      />
      <Link href="#">Linkedin</Link>
    </span>
    <span className="flex">
      <Image
        className="mr-2"
        alt="Email Icon"
        src="/email.svg"
        width={20}
        height={20}
      />
      <Link href="#">Email</Link>
    </span>
  </div>
);

export default Socials;
