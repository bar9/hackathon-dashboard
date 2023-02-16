const Link = (props: JSX.IntrinsicElements['a']) => (
  <a
    className="text-pink-500 underline hover:no-underline dark:text-pink-400"
    {...props}
  />
);

export default function App() {
  return (
    <>
    <div className="mx-auto my-8 mt-10 w-8/12 rounded border border-gray-200 p-4 shadow-md dark:border-neutral-600 dark:bg-neutral-800 dark:shadow-none">
      <h1 className="mb-4 text-4xl">Welcome</h1>
      <p className="my-4">
        <em>Minimal, fast, sensible defaults.</em>
      </p>
      <p className="my-4">
        Using <Link href="https://vitejs.dev/">Vite</Link>,{' '}
        <Link href="https://reactjs.org/">React</Link>,{' '}
        <Link href="https://www.typescriptlang.org/">TypeScript</Link> and{' '}
        <Link href="https://tailwindcss.com/">Tailwind</Link>.
      </p>
      <p className="my-4">
        Change{' '}
        <code className="border-1 2py-1 rounded border border-pink-500 bg-neutral-100 px-1 font-mono text-pink-500 dark:border-pink-400 dark:bg-neutral-700 dark:text-pink-400">
          src/App.tsx
        </code>{' '}
        for live updates.
      </p>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</>
  );
}
