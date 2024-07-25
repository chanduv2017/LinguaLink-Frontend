import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const Navigate=useNavigate();
  return (
    <main>
        
        <section className="bg-gray-100 py-20 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                Seamless Language Translation
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Translate your content with ease and accuracy. Our powerful AI-driven translation engine ensures your
                message is conveyed perfectly in any language.
              </p>
              <div className="mt-8">
                <Button onClick={()=>Navigate("/signup")}>Get Started</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Features</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Discover the benefits of our language translation service.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-700">
                
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Accurate Translations</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Our advanced AI-powered translation engine ensures accurate and natural-sounding translations.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-700">
                
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Multilingual Support</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Translate your content into over 100 languages, including rare and obscure languages.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-700">
                
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">Instant Translations</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Get your content translated in real-time, with no delays or waiting times.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};




export default HomePage;