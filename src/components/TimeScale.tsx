import { useMemo } from "react";

type IsoDate = string;
type RenderArea = number;

interface TimeScaleProps {
    areaBefore: RenderArea;
    areaDuring: RenderArea;
    areaAfter: RenderArea;
    earliest: IsoDate;
    start: IsoDate;
    end: IsoDate;
    latest: IsoDate;
}

interface TickDef {
    label: string,
    id: string
}

function addMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes * 60000);
}

function ticksForSegment(start: IsoDate, end: IsoDate, area: number, inclusive = false) {
    let segmentDurationInMinutes = (new Date(end) - new Date(start)) / 60000;
    const minutesPerTickIdeal = (segmentDurationInMinutes / area);

    const MINUTES_PER_DAY = 1440;

    // round to well known time steps
    let minutesPerTick = 0;
    if (minutesPerTickIdeal < 1) {
        minutesPerTick = 1;
    } else if (minutesPerTickIdeal < 5) {
        minutesPerTick = 5;
    } else if (minutesPerTickIdeal < 15) {
        minutesPerTick = 15;
    } else if (minutesPerTickIdeal < 30) {
        minutesPerTick = 30;
    } else if (minutesPerTickIdeal < 60) {
        minutesPerTick = 60;
    } else if (minutesPerTickIdeal < 2 * 60) {
        minutesPerTick = 2 * 60;
    } else if (minutesPerTickIdeal < 4 * 60) {
        minutesPerTick = 4 * 60;
    } else if (minutesPerTickIdeal < 8 * 60) {
        minutesPerTick = 8 * 60;
    } else if (minutesPerTickIdeal < 12 * 60) {
        minutesPerTick = 12 * 60;
    } else if (minutesPerTickIdeal < MINUTES_PER_DAY) {
        minutesPerTick = MINUTES_PER_DAY;
    } else if (minutesPerTickIdeal < 2 * MINUTES_PER_DAY) {
        minutesPerTick = 2 * MINUTES_PER_DAY;
    } else if (minutesPerTickIdeal < 7 * MINUTES_PER_DAY) {
        minutesPerTick = 7 * MINUTES_PER_DAY;
    }//and so on, maybe up to 1 day as tick

    const ticks = [];
    let m = 0;
    if (inclusive) {
        segmentDurationInMinutes += 1;
    }
    while (m < segmentDurationInMinutes) {
        const date = addMinutes(new Date(start), m);
        let label = "";
        if (minutesPerTickIdeal < MINUTES_PER_DAY) {
            label = date.toTimeString().split(' ')[0];
        } else {
            label = date.toDateString();
        }
        const id = date.toISOString().replace(/[-:.]/gi, '');
        ticks.push({ label, id });
        m += minutesPerTick;
    }

    return ticks;

}
function ticksFromTimeScaleProps(props: TimeScaleProps): [TickDef[], TickDef[], TickDef[]] {
    return [
        ticksForSegment(props.earliest, props.start, props.areaBefore),
        ticksForSegment(props.start, props.end, props.areaDuring),
        ticksForSegment(props.end, props.latest, props.areaAfter, true),
    ];
    // algorithm description:
    // we want the area per ticks ratio to stay within a certain range, so styling is possible.
    // take a random shot: 12 per tick

}

export default function TimeScale(props: TimeScaleProps) {
    const ticks = useMemo(() => ticksFromTimeScaleProps(props), [props]);

    return <>
        <div className="flex flex-col w-full border-opacity-50 ">
            <div className="grid flex-grow card bg-base-200 px-4">
                <ul className="steps thin steps-vertical">
                    {ticks[0].map(tick =>
                        <li id={tick.id} data-content="" className="border-1 step step-primary">{tick.label}</li>
                    )}
                </ul>
            </div>
            <div className="divider">START HACK: <br /> {new Date(props.start).toLocaleString()}</div>
            <div className="grid flex-grow card bg-base-200 px-4">
                <ul className="steps thin steps-vertical">
                    {ticks[1].map(tick =>
                        <li id={tick.id} data-content="" className="border-1 step step-primary">{tick.label}</li>
                    )}
                </ul>
            </div>
            <div className="divider">END HACK: <br /> {new Date(props.end).toLocaleString()}</div>
            <div className="grid flex-grow card bg-base-200 px-4">
                <ul className="steps thin steps-vertical">
                    {ticks[2].map(tick =>
                        <li id={tick.id} data-content="" className="border-1 step step-primary">{tick.label}</li>
                    )}
                </ul>
            </div>
        </div>
    </>;
}
