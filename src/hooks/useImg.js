import React, { useEffect, useState } from 'react'


const useImg = ({ animeRandom }) => {

    const [imgChange, setImgChange] = useState("itachi")


    useEffect(() => {
        if (animeRandom.name.toLowerCase().includes("itachi")) {
            setImgChange("itachi")
        } else if (animeRandom.name.toLowerCase().includes("naruto")) {
            setImgChange("naruto")
        } else if (animeRandom.name.toLowerCase().includes("kakashi")) {
            setImgChange("kakashi")
        } else if (animeRandom.name.toLowerCase().includes("pain")) {
            setImgChange("pain")
        }else if (animeRandom.name.toLowerCase().includes("gaara")) {
            setImgChange("gaara")
        }else if (animeRandom.name.toLowerCase().includes("sasuke")) {
            setImgChange("sasuke")
        }else{
            setImgChange("naruto20")
        }


    }, [animeRandom])



  return {imgChange}
}

export default useImg