import React, {useState} from 'react'

// import GalleryFilter from './GalleryFilter'

import Img from 'gatsby-image'
// import Category from './id'

export default () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState()
    
    

    return(
        <>

          {/* <GalleryFilter onSelect={category => setSelectedCategoryId(category.portfolios.map(a => 

            a.Image.childImageSharp.fluid)  
                      
         )} />  */}

                
    
        {selectedCategoryId && (
            <>
                {selectedCategoryId.map(a => <Img key={a.srcWebp} fluid={a} className="image"/>)}
            </> 
        )}
        
    
        </>
    )
}