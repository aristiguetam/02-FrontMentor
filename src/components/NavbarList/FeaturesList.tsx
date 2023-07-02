'use client';

import { useContext } from "react"
import Image from "next/image"
import { UIContext } from "@/context"
import { FeaturesCard } from "../FeaturesCard/FeaturesCard";

export const FeaturesList = () => {

  const { featuresList } = useContext(UIContext);

  return (
    <div className="relative">
      {
        featuresList ? (
          <>
            <div className="fadeIn hidden md:flex">
              <div className="absolute top-3 left-28">
                <FeaturesCard />
              </div>
            </div>
          </>
        ) : null
      }

    </div>
  )
}
