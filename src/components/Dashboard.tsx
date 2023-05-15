import SampledDataLane from "./SampledDataLane";
import ActivityCanvas from "./ActivityCanvas";
import TimeScale from "./TimeScale";
import AppState from "../services/AppState";

interface AppProps {
    appState: AppState
}

export default function Dashboard(props: AppProps) {
    return <>
        <div className="w-full flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
            <div className="w-fixed w-full flex-shrink flex-grow-0 px-4">
                <div className="sticky top-0 p-4 w-full h-full">
                    <TimeScale
                        areaAfter={6}
                        areaBefore={6}
                        areaDuring={12}
                        earliest={"2021-12-01T00:00:00"}
                        start={"2022-01-01T08:00:00"}
                        end={"2022-01-01T17:00:00"}
                        latest={"2022-01-15T00:00:00"}
                    ></TimeScale>
                </div>
            </div>
            <main role="main" className="w-full flex-grow pt-1 px-3">
                <ActivityCanvas></ActivityCanvas>
            </main>
            <div className="w-fixed w-full flex-shrink flex-grow-0 px-2">
                <div className="flex sm:flex-col px-2">
                    {/*<SampledDataLane></SampledDataLane>*/}
                </div>
            </div>
        </div>
        <footer className="bg-black mt-auto">
            ...
        </footer>
    </>;
}
