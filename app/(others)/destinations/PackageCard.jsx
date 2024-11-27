import React from 'react';
import { destinations11 } from "@/data/desinations";
import Link from "next/link";
import Image from "next/image";

const PackageCard = () => {
  return (
    
             <div className="row">
  {destinations11.map((item, index) => (
    <div 
      className="container col-lg-4 col-md-6 col-sm-12 mb-1 pb-4" style={{ width: "32%" }}
      key={item.id}
    >
      <Link
        href="/Packages"
        className="citiesCard -type-1 d-block rounded-4 h-100 d-flex flex-wrap"
      >
        <div className="citiesCard__image ratio ratio-3:4">
          <Image
            width={300}
            style={{borderRadius:"7%"}}
            height={400}
            src={item.img}
            alt="image"
            className="js-laz"
          />
        </div>
        <div className="citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20">
          <div className="citiesCard__bg" />
          <div className="citiesCard__top">
            <div className="text-14 text-white" >{item.hoverText}</div>
          </div>
          <div className="citiesCard__bottom">
            <h4 className="text-26 md:text-20 lh-13 text-white mb-20">
              {item.city}
            </h4>
            <button className="button col-12 h-60 -blue-1 bg-white text-dark-1">
              Explore More
            </button>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>  
      
    
  )
}

export default PackageCard
