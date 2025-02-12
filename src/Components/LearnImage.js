import Image from "next/image"
import DummmyImage from "../../public/images/restaurant.png"

function LearnImage() {
  return (
   <>
    <div>learnImage</div>
    <Image src={DummmyImage} alt="dummy iamge" width={900}/>
   </>
  )
}

export default LearnImage