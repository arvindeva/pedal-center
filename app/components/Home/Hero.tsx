import bigMuff from '~/images/big_muff.png';
import {Button} from '~/components/ui/button';

export default function Hero() {
  return (
    <div>
      <div className="bg-black py-24 text-white ">
        <div className="mx-auto max-w-screen-lg flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col gap-y-12 sm:gap-y-16">
            <h1 className="text-4xl sm:text-[100px] font-bold text-center">
              pedal hub
            </h1>
            <h1 className="text-2xl sm:text-[80px] text-center">
              end of season sale
            </h1>
            <h2 className="text-lg sm:text-[24px] text-center">
              up to 50% off a large selection
            </h2>
            <Button className="">shop now</Button>
          </div>
          <div className="hidden sm:block max-w-72">
            <img src={bigMuff} alt="big muff" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
