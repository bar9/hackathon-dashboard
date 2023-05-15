import GridLayout, { Layout } from "react-grid-layout";
import Xarrow, { useXarrow } from "react-xarrows";

const data = [
    {
        id: "activity-team",
        title: "Challenge published",
        content: "Healthy beer challenge",
        timestamp: "2022-01-01T07:00:00.000Z",
        action: "Join",
        area: 2
    },
    {
        id: "activity-a",
        title: "Team created",
        content: "The fun hackers",
        timestamp: "2022-01-01T13:00:00.000Z",
        action: "Join",
        area: 2
    },
    {
        id: "activity-b",
        title: "Something happened",
        content: "artifact / link /context",
        timestamp: "2022-01-01T12:00:00.000Z",
        action: "Action",
        area: 6
    },
    {
        id: "activity-c",
        title: "Something happened",
        content: "artifact / link / context",
        timestamp: "2022-01-01T15:00:00.000Z",
        action: "Action",
        area: 3
    }
];

export default function ActivityCanvas() {
    const layout = [
        { i: "team", h: 1, w: 2 },
        { i: "a", h: 1, w: 2 },
        { i: "b", h: 3, w: 2 },
        { i: "c", h: 1, w: 2 }
    ];
    const updateXarrow = useXarrow();
    return <>
        <GridLayout
            className="layout"
            layout={layout}
            cols={2}
            rowHeight={350}
            width={1024}
            onLayoutChange={updateXarrow}
        >
            {data.map(x => (
                <div key={x.id}>
                    <div id={x.id} className="card h bg-base-100 shadow-xl image-full">
                        <figure><img src="https://via.placeholder.com/350" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{x.title}</h2>
                            <p>{x.content}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">{x.action}</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </GridLayout>
        {data.map(x => (
            <Xarrow start={x.timestamp.replace(/[.:-]/gi, '')} end={x.id}></Xarrow>
        ))}
    </>;
}
//todo: what ids for the ticks? so I can set them to the start of the arrow. Timestamp?
