import GridLayout, {Layout} from "react-grid-layout";
import Xarrow, {useXarrow} from "react-xarrows";

export default function ActivityCanvas() {
  const layout = [
    { i: "team", x: 0, y: 0, w: 2, h: 1},
    { i: "a", x: 0, y: 1, w: 1, h: 1},
    { i: "b", x: 1, y: 1, w: 1, h: 1},
    { i: "c", x: 0, y: 2, w: 1, h: 1}
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
      <div key="team">
        <div id="activity-team" className="card h bg-base-100 shadow-xl image-full">
          <figure><img src="https://via.placeholder.com/350"/></figure>
          <div className="card-body">
            <h2 className="card-title">Challenge published</h2>
            <p>Healthy beer challenge</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">website</button>
            </div>
          </div>
        </div>
      </div>
      <div key="a">
        <div id="activity-a" className="card h bg-base-100 shadow-xl image-full">
          <figure><img src="https://via.placeholder.com/350"/></figure>
          <div className="card-body">
            <h2 className="card-title">Team created</h2>
            <p>The fun hackers</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div key="b">
        <div id="activity-b" className="card bg-base-100 shadow-xl image-full">
          <figure><img src="https://via.placeholder.com/350"/></figure>
          <div className="card-body">
            <h2 className="card-title">Something happened</h2>
            <p>artifact / link /context</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Action</button>
            </div>
          </div>
        </div>
      </div>
      <div key="c">
        <div id="activity-c" className="card bg-base-100 shadow-xl image-full">
          <figure><img src="https://via.placeholder.com/350"/></figure>
          <div className="card-body">
            <h2 className="card-title">Something happened</h2>
            <p>artifact / link / context</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Action</button>
            </div>
          </div>
        </div>
      </div>
    </GridLayout>
    <Xarrow  start={"x15dago"} end={"activity-team"}></Xarrow>
    <Xarrow start={"x10am"} end={"activity-a"}></Xarrow>
    <Xarrow start={"x2pm"} end={"activity-b"}></Xarrow>
    <Xarrow start={"x8pm"} end={"activity-c"}></Xarrow>
  </>;
}