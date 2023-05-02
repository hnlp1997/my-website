import Header from "../components/sections/Header";
import Layout from "../components/layout.js";
<Header/>

export default function Home() {
    return(
      <Layout>

            <div className="overflow-clip overflow-y-clip pt-14">
              <div className="flex flex-col w-full mb-12 text-left lg:text-center items-center justify-center overflow-y-clip">
              <img src="lookdown.png" alt="Kanna" height="425" width="425" className="text-center mx-auto transform scale-110"/>
              <h2 className="text-4xl max-w-xl mx-auto mt-8 text-left lg:text-center font-weight: 1100">404: Page Doesn't Exist!</h2>
                <p className="  text-lg max-w-xl mx-auto mt-4 text-left lg:text-center">Click on any of the links below to go back.</p>
              </div>
            </div>
        </Layout>
    )
}