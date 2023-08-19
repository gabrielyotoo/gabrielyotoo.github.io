import Image from 'next/image';
import Link from 'next/link';

const Companies = async () => (
  <div className="my-4 flex justify-between">
    <Link target="_blank" href="https://www.pagol.com.br/">
      <Image alt="PaGol Logo" src="/pagol.webp" height={40} width={100} />
    </Link>
    <Link target="_blank" href="https://www.cartaohoje.com.br/">
      <Image alt="Herval Logo" src="/herval.webp" height={40} width={100} />
    </Link>
    <Link target="_blank" href="https://ultronique.com.br/">
      <Image
        alt="Ultronique Logo"
        src="/ultronique.webp"
        height={40}
        width={100}
      />
    </Link>
    <Link target="_blank" href="https://www.matera.com.br/">
      <Image alt="Matera Logo" src="/matera.webp" height={40} width={100} />
    </Link>
    <Link target="_blank" href="https://mblabs.com.br/">
      <Image alt="Mblabs Logo" src="/mblabs.webp" height={40} width={100} />
    </Link>
    <Link target="_blank" href="https://eqip.localiza.com/">
      <Image alt="Localiza Logo" src="/localiza.webp" height={40} width={100} />
    </Link>
  </div>
);

export default Companies;
