import React from "react";
import Table from "./Table";
import { getAllByTestId, render,screen } from "@testing-library/react";
//import { shallowEqual } from "react-redux";


const dummyCols = [
    { field: "RouteNo", header: "BusNo" },
    { field: "Direction", header: "Direction" },
    { field: "NormalizedSchedules", header: "WaitingTime" },
]

const dummyData= [
    {
        "RouteNo": "004",
        "RouteName": "POWELL/DOWNTOWN/UBC",
        "Direction": "WEST",
        "Schedules": [
            {
                "ExpectedLeaveTime": "2:16pm",
            },
            {
                "Pattern": "WB1D",
                "Destination": "TO BLANCA",
                "ExpectedLeaveTime": "3:28pm",
            }
        ],

}]

describe('test Table Component', () => {

    it('renders in table rows based on provided columns', () => {
       const container=  render(<Table data={null} columns={null}/>)
    
   
   const table = container.findByRole('table');
   expect(table).not.toBeNull();

   // The table should have ONLY 1 thead element
  
//    expect(getByTestId("thead")).toHaveLength(1);
   const thead = screen.findByRole('thead');
   expect(thead).not.toBeNull()
    
     // The number of th tags should be equal to number of columns
   const headers = screen.findByRole('th');
   expect(headers).toBeTruthy()

 // The table should have  tbody tag
 const tbody = screen.findByRole('tbody');
 expect(tbody).not.toBeNull()

 //Table Row
 const row=screen.findByRole('tr')
 expect(row).not.toBeNull()

 

 
   
})

    
})