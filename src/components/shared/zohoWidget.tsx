import { useEffect } from "react";

const ZohoChatWidget = () => {
  useEffect(() => {
    const tawk = document.createElement("script");
    tawk.async = true;
    tawk.src = "https://embed.tawk.to/66949419becc2fed6924d88e/1i2q6527q";
    const s: any = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(tawk, s);
    return () => {
      document.getElementById("tawkToScript")?.remove();
    };
  }, []);

  return null;
};

export default ZohoChatWidget;


// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/66949419becc2fed6924d88e/1i2q6527q';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
