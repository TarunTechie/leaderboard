import { useEffect, useState } from "react";
import Header from "../components/Header";
import  {teamNames} from "../constants/teams";
export default function ScoreBoard()
{
    const [startTime, setStartTime] = useState(0)
    const [time, setTime] = useState(0)
    const [teams, setTeams] = useState(teamNames)
    function setStats(event)
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
        }, 10)
        return()=>clearInterval(interval)
    }, [time])

    useEffect(() => {
        setTeams(teams.sort((a,b) => a.time-b.time))
        setTeams(teams.sort((a,b) => b.lap-a.lap))
    }, [teams])
    const hours=Math.floor(Math.floor(time / 3600000))
    const mins = Math.floor((time % 3600000) / 60000)
    const seconds=Math.floor((time % 60000) / 1000)
    return (
        <div>
        <header className="bg-white flex p-2 items-center justify-center">
                <img src="./logos/efx.png"/>
                <img src="./logos/asme.png"/>
                <span className="flex text-6xl font-time items-baseline gap-4 mx-auto w-1/3">
                    <h1 >{hours<10?"0"+hours:hours}:</h1>
                    <h1 >{mins<10?"0"+mins:mins}:</h1>
                    <h1 >{seconds<10?"0"+seconds:seconds}.</h1>
                    <h1 className="text-4xl">{Math.floor((time % 1000) )}</h1>
                </span>
                <img src="./logos/reva.png" className="h-12"/>
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
                                <td><button value={data.name} onClick={setStats}>{data.name.toUpperCase()}</button></td>
                                <td>{data.lap}</td>
                                <td>
                                <span className="flex justify-center items-baseline">
                                    <h1>{Math.floor(Math.floor(data.time / 3600000))}:</h1>
                                    <h1>{Math.floor((data.time % 3600000) / 60000)}:</h1>
                                    <h1>{Math.floor((data.time % 60000) / 1000)}.</h1>
                                    <h3 className="text-sm">{Math.floor((data.time % 1000) )}</h3>
                                </span>
                                </td>
                            </tr>))}
                </tbody>
            </table>
            </div>
        </div>
    )
}