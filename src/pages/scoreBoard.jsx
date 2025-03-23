import { useEffect, useState } from "react";
import Header from "../components/Header";
import  {teamNames} from "../constants/teams";
export default function ScoreBoard()
{
    const [startTime, setStartTime] = useState(0)
    const [time, setTime] = useState(0)
    const [teams, setTeams] = useState(teamNames)
    function printit(event)
    {
        let teamName=event.target.value
        setTeams((teams) => (
            teams.map((team)=>team.name===teamName?{...team,lap:team.lap+1}:team)
        ))
        setTeams((teams) => (
            teams.map((team)=>team.name===teamName?{...team,time:time}:team)
        ))
    }
    useEffect(() => {
        let interval
        if (startTime === 0)
        {
            setStartTime(Date.now()-startTime)
        }  
        interval=setInterval(() => {
            setTime(Date.now()-startTime)
        }, 100)
        return()=>clearInterval(interval)
    }, [time])
    
    return (
        <div>
        <header className="bg-white flex justify-between p-4 items-center">
                <img src="./logos/efx.png" />
                <span className="flex text-6xl font-time items-baseline w-1/5 gap-4">
                    <h1 >{Math.floor((time % 3600000) / 60000)}:</h1>
                    <h1 >{Math.floor((time % 60000) / 1000)}.</h1>
                    <h1 className="text-4xl">{Math.floor((time % 1000) )}</h1>
                </span>
                <img src="./logos/reva.png"/>
        </header>
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
                                <span className="flex">
                                    <h1 >{Math.floor((data.time % 3600000) / 60000)}:</h1>
                                    <h1 >{Math.floor((data.time % 60000) / 1000)}.</h1>
                                    <h1 >{Math.floor((data.time % 1000) )}</h1>
                                </span>
                            </tr>))}
                </tbody>
            </table>
            </div>
        </div>
    )
}