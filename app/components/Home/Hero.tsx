import * as React from 'react';

export default function Hero() {
  return (
    <div className="w-full h-[calc(100vh-var(--header-height))] text-2xl text-zinc-200 bg-zinc-900">
      <div className="flex h-full flex-row items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-[48px] md:text-[72px] font-bold">pedal hub</h1>
          <h2 className="text-[24px] md:text-[32px]">
            world&apos;s no. 1 pedal store
          </h2>
        </div>
      </div>
    </div>
  );
}
