import Header from "../components/sections/Header";
<Header/>

export default function Home() {
    return(
        <>
        <section>
            <div className="min-h-screen px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
              <div className="flex flex-col w-full mb-12 text-left lg:text-center">
              <img src="lookdown.png" alt="Kanna" height="450" width="450" className="text-center mx-auto transform scale-110"/>
              <h2 className="text-5xl max-w-xl mx-auto mt-8 text-left lg:text-center font-weight: 1100">404: Page Doesn't Exist!</h2>
                <p className="text-2xl max-w-xl mx-auto mt-4 text-left lg:text-center">Looks like you are super lost.</p>
                <p className=" max-w-xl mx-auto mt-8 text-left lg:text-center">Click on any of the links above or go back to the home page.</p>
              </div>
            </div>
          </section>
        </>
    )
}