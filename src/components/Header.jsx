export default function Header()
{
    return (
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
    )
}