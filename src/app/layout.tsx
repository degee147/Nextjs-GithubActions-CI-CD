import './globals.scss'
import type {Metadata} from 'next'
import fonts from "@/assets/fonts";
import Footer from "@/components/Footer";
import Script from "next/script";


export const metadata: Metadata = {
  title: {
    template: "%s - FagoPay",
    default: "FagoPay"
  },
  description: 'Innovative Personal and Business Banking solution for Africans',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fonts.grotesk.variable}>
    <body>
    {children}
    <Footer/>
    {/*<Script id="freshdesk">*/}
    {/*  {*/}
    {/*    `window.fwSettings = {*/}
    {/*    'widget_id': ${process.env.NEXT_PUBLIC_FRESHDESK_WIDGET_ID},*/}
    {/*    'locale': 'en'*/}
    {/*  };*/}
    {/*    !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}()`*/}
    {/*  }*/}
    {/*</Script>*/}
    {/*<Script*/}
    {/*  type='text/javascript'*/}
    {/*  src={`https://widget.freshworks.com/widgets/${process.env.NEXT_PUBLIC_FRESHDESK_WIDGET_ID}.js`}*/}
    {/*  async*/}
    {/*  defer*/}
    {/*/>*/}

    <Script id="tawk-to" type="text/javascript">
      {`
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/653123e5f2439e1631e618fb/1hd3v8fcj';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
      `}
    </Script>
    </body>
    </html>
  )
}
