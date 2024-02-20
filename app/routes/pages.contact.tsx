import * as React from 'react';
import {useLoaderData, Link, type MetaFunction} from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{title: `pedal center | contact`}];
};

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-180px)]">
      <div className="max-w-screen-lg mx-auto p-4 my-8">
        <h1 className="text-5xl mb-12">contact</h1>
        <p className="text-2xl">
          reach me at:{' '}
          <span className="font-bold underline text-blue-700">
            arvindeva@gmail.com
          </span>
        </p>
      </div>
    </div>
  );
}
