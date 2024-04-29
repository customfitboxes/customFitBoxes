// components/ZohoChatWidget.tsx
import React, { useEffect } from 'react';

const ZohoChatWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'zsiqchat';
    script.innerHTML = `
      var $zoho = $zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "siqab47534a90d15ec8f5d27c4677f561d4adcce8a9c4162839fa9a859b396b1e20",
        values: {},
        ready: function () {}
      };
      var d = document;
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.id = "zsiqscript";
      s.defer = true;
      s.src = "https://salesiq.zohopublic.com/widget";
      var t = d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s, t);
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ZohoChatWidget;