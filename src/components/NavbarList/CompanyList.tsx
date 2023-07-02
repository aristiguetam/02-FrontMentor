'use client';
import { useContext } from "react"
import { UIContext } from "@/context"
import { CompanyCard } from "../CompanyCard/CompanyCard";

export const CompanyList = () => {

  const { companyList } = useContext(UIContext);

  return (
    <div className="relative">
      {
        companyList ? (
          <>
            <div className="fadeIn hidden md:flex">
              <div className="absolute top-3 left-80">
                <CompanyCard />
              </div>
            </div>

          </>
        ) : (
          <></>
        )
      }

    </div>
  )
}
