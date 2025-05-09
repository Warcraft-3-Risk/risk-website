import UnitsHero from '@/app/how-to/units-page/__blocks/UnitsHero';
import UntisNavigation from '@/app/how-to/units-page/__blocks/UnitsNavigation';
import '@/core/SCSS/base/layout/page/units-page/p-units-page.scss';

export default function UnitsPage() {
  return (
    <div className="units-page min-h-screen w-full">
      <UnitsHero />
      <UntisNavigation />
    </div>
  );
}
