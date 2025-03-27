import { useEffect, useState } from "react";
import  {teamNames} from "../constants/teams";
export default function ScoreBoard()
{
    const [time, setTime] = useState(0)
    const [teams, setTeams] = useState(teamNames)
    const [visible, setVisible] = useState("cursor-none")
    function setStats(teamName,preTime)
    {
        localStorage.setItem("updatedTeam",JSON.stringify({"name":teamName,"time":time,"prevTime":preTime}))
        setTeams((teams) => (
            teams.map((team)=>team.name===teamName?{...team,lap:team.lap+1,time:time}:team)
        ))
    }

    function updateStats(event)
    {
        let teamName = event.target.value
        let updatedTeam = JSON.parse(localStorage.getItem('updatedTeam'))
        console.log(updatedTeam)
        setTeams((teams) => (
            teams.map((team) => team.name === updatedTeam.name ? { ...team, lap: team.lap==0? 0: team.lap - 1 ,time:updatedTeam.prevTime} : team)
        ))
        if (updatedTeam.name !== teamName)
        {
            setTeams((teams) => (
                teams.map((team)=>team.name===teamName?{...team,lap:team.lap+1,time:updatedTeam.time}:team)
            ))
        }
    }
    useEffect(() => {
        let interval  
        interval=setInterval(() => {
            setTime((time)=>time+10)
        }, 10)
        return()=>clearInterval(interval)
    }, [])

    useEffect(() => {
        setTeams(teams.sort((a,b) => a.time-b.time))
        setTeams(teams.sort((a,b) => b.lap-a.lap))
    }, [teams])

    useEffect(() => {
        let timeoutRef;
        const handleMouse = () => {
            setVisible("customCursor")
            timeoutRef=setTimeout(()=>setVisible("cursor-none"),2000)
        }
        window.addEventListener("mousemove", handleMouse) 
        return () => {
            window.removeEventListener("mousemove", handleMouse)
            clearTimeout(timeoutRef)
        }
    },[])
    const hours=Math.floor(Math.floor(time / 3600000))
    const mins = Math.floor((time % 3600000) / 60000)
    const seconds=Math.floor((time % 60000) / 1000)
    return (
        <div className={visible}>
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
                <table className=" w-[100vw] h-[84vh]">
                <thead className="text-2xl bg-[#ff5912] font-head ">
                <tr> 
                <th>POSTION</th>
                <th>TEAM</th>
                <th>LAP</th>
                <th>TIME</th>            
                </tr>
                </thead>
                <tbody className="text-xl bg-black">
                        {teams.map((data,index) => (
                            <tr className="text-center font-name">
                                <td>{index+1}</td>
                                <td><button style={{width:"100%"}} className={visible} id={data.name} onClick={()=>{setStats(data.name,data.time)}}>{data.name.toUpperCase()}</button></td>
                                <td><button style={{width:"100%"}} className={visible} value={data.name} onClick={updateStats}>{data.lap}</button></td>
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