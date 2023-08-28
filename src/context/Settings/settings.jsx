import React from "react";
export const SettingContext= React.createContext()

export default function Settings(props){
  const state={
   maxItemsPerPage:3,
    complete: true,
    difficulty:"difficulty"
  }
return(
        <SettingContext.Provider value={state}>
                {props.children}
        </SettingContext.Provider>
)
}

