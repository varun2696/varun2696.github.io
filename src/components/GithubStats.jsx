import GitHubCalendar from 'react-github-calendar';


const GithubStats = () => {
    return (
        <div className="w-full py-10 border-b-[1px] border-b-black">
            <h1 className="flex justify-center items-center text-center p-[5%] text-4xl md:text-5xl text-gray-300 font-bold capitalize">
                Github
            </h1>
            <div>
                <p className="text-center pb-5 text-2xl md:text-2xl font-bold">
                    Github Calender
                </p>
                <div className='w-full flex items-center justify-center'>
                    <GitHubCalendar
                        username="varun2696"
                    />
                </div>
            </div>
            <div className='w-full mt-[5%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2'
            >
                <div className='grid items-center justify-center text-center'>
                    <p className="pb-5 text-2xl md:text-2xl font-bold">
                        Github Stats
                    </p>
                    <img

                        id="github-stats-card"
                        src="https://github-readme-stats.vercel.app/api?username=varun2696&show_icons=true&theme=panda"
                        alt="git stats"
                    />
                </div>
                <div  className='grid items-center justify-center text-center'>
                    <p className="text-center pb-5 text-2xl md:text-2xl font-bold">
                        Github Streak
                    </p>
                    <img
                        id="github-streak-stats"
                        src="https://github-readme-streak-stats.herokuapp.com?user=varun2696&theme=panda"
                        alt="streaks"
                    />
                </div>

            </div>
            <div className='mt-[5%]'>
                <p className="text-center pb-5 text-2xl md:text-2xl font-bold">
                    Github Languages
                </p>
                <div className='flex items-center justify-center'>
                    <img
                        id="github-top-langs"
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=donut&theme=panda"
                        alt="Languages"
                    />
                </div>
            </div>

        </div>
    )
}

export default GithubStats




