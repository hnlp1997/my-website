import Header from "../components/sections/Header";
import Layout from "/Users/hnluupham/Downloads/demo 4 2/src/components/layout.js";
<Header/>

export default function Home() {
    return(
      <Layout>

            <div className="overflow-clip overflow-y-clip">
              <div className="flex flex-col w-full mb-12 text-left lg:text-center items-center justify-center overflow-y-clip">
              <img src="lookdown.png" alt="Kanna" height="450" width="450" className="text-center mx-auto transform scale-110"/>
              <h2 className="text-5xl max-w-xl mx-auto mt-8 text-left lg:text-center font-weight: 1100">404: Page Doesn't Exist!</h2>
                <p className="text-2xl max-w-xl mx-auto mt-4 text-left lg:text-center">Looks like you are super lost.</p>
                <p className=" max-w-xl mx-auto mt-8 text-left lg:text-center">Click on any of the links above or go back to the home page.</p>
              </div>
            </div>
        </Layout>
    )
}