import bigMuff from '~/images/big_muff.png';
import {Button} from '~/components/ui/button';
import {Link} from '@remix-run/react';

export default function Hero() {
  return (
    <div>
      <div className="bg-black py-44 text-white ">
        <div className="mx-auto max-w-screen-lg flex flex-col sm:flex-row sm:gap-y-4 justify-between items-center">
          <div className="flex flex-col gap-y-12 sm:gap-y-8">
            <h1 className="text-4xl sm:text-[100px] font-bold text-center">
              pedal center
            </h1>
            <h1 className="hidden sm:block text-[70px] text-center bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              end of season sale
            </h1>
            <h1 className="block sm:hidden text-[40px] text-center bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              end of season sale
            </h1>
            <h2 className="text-lg sm:text-[24px] text-center">
              up to 50% off a large selection
            </h2>
            <Link to="/collections/pedals" className="text-center">
              <Button className="bg-white text-zinc-900 hover:bg-zinc-400 active:bg-zinc-700 active:text-zinc-200 py-8 text-2xl w-full">
                shop now
              </Button>
            </Link>
          </div>
          <div className="hidden sm:block max-w-[360px]">
            <img src={bigMuff} alt="big muff" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
