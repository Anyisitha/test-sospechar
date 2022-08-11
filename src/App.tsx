import { FC, Suspense } from "react";
/** Modules */
import useRouter from "routes";

/**
 * @class App
 * @return {JSX.Element} - returning the principal component of the application.
 */
const App: FC = (): JSX.Element => {
  /** Routes */
  const Router = useRouter();

  return (
    <Suspense fallback={<span>....Cargando!</span>}>
      {Router}
    </Suspense>
  );
}

export default App;