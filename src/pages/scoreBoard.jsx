import { useState } from "react";
import Header from "../components/Header";
import  {teamNames} from "../constants/teams";
export default function ScoreBoard()
{
    const [teams, setTeams] = useState(teamNames)
    function printit(event)
    {
        console.log(event.target.value)
    }
    return (
        <div>
            <Header />
            <div>
                <table className="border-separate border border-white w-screen h-[85vh]">
                <thead className="text-2xl bg-gray-500 font-head">
                <tr>
                <th>POSTION</th>
                <th>TEAM</th>
                <th>LAP</th>
                <th>TIME</th>            
                </tr>
                </thead>
                <tbody className="text-xl">
                        {teams.map((data,index) => (
                            <tr className="text-center font-name">
                                <td>{index+1}</td>
                                <td><button value={data.name} onClick={printit}>{data.name.toUpperCase()}</button></td>
                                <td>{data.lap}</td>
                                <td>{data.time}s</td>
                            </tr>))}
                </tbody>
            </table>
            </div>
        </div>
    )
}