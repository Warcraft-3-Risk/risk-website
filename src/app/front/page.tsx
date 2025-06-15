import FrontHeader from '@/app/front/__blocks/FrontHeader';

import '@/core/SCSS/base/layout/page/p-front-page.scss';
import W3CSection from './__blocks/W3CSection';

export default function FrontPage() {
  return (
    <div className="bluebackground min-h-screen">
      <FrontHeader />
      <W3CSection />
    </div>
  );
}
