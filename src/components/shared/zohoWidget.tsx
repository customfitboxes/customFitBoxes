import { useEffect } from 'react';

const ZohoChatWidget = () => {
  useEffect(() => {
    const tawk = document.createElement('script');
    tawk.async = true;
    tawk.src = 'https://embed.tawk.to/66392fa007f59932ab3cab25/1ht7m42su';
    const s:any = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(tawk, s);
    return () => {
      document.getElementById('tawkToScript')?.remove();
    };
  }, []);

  return null;
};

export default ZohoChatWidget;