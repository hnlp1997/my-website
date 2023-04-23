import Link from 'next/link'
import Image from 'next/image'
import cloudinary from '../lib/cloudinary';

export default function Photos({ images }) {
    return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

</div>
)}
export async function getStaticProps() {
    const results = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute();
    const reducedResults = [];
  
    let i = 0;
    for (const result of results.resources) {
      reducedResults.push({
        id: i,
        height: result.height,
        width: result.width,
        public_id: result.public_id,
        format: result.format,
      });
      i++;
    }
  
  console.log(reducedResults)
    return {
      props: {
        images: reducedResults,
      },
    };
  }
