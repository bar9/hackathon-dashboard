export default function TimeScale() {
  return <>
    <div className="flex flex-col w-full border-opacity-50 h-[90vh]">
      <div className="grid h-20 card bg-base-200 px-4">
        <ul className="steps steps-vertical">
          <li data-content="" className="step step-primary">15 days ago</li>
        </ul>
      </div>
      <div className="divider">START HACK</div>
      <div className="grid flex-grow card bg-base-200 px-4">
        <ul className="steps steps-vertical">
          <li data-content="●" className="step step-primary">10:00</li>
          <li data-content="" className="step step-primary">12:00</li>
          <li  data-content="●"className="step step-primary">14:00</li>
          <li data-content="" className="step step-primary">16:00</li>
          <li data-content="" className="step">18:00</li>
          <li data-content="●" className="step">20:00</li>
          <li data-content="●" className="step">22:00</li>
          <li data-content="" className="step">...</li>
          <li data-content="●" className="step">06:00</li>
          <li data-content="" className="step">08:00</li>
          <li data-content="●" className="step">10:00</li>
        </ul>
      </div>
      <div className="divider">END HACK</div>
      <div className="grid h-20 card bg-base-200 px-4">
        {/*<ul className="steps steps-vertical">*/}
        {/*  <li className="step"></li>*/}
        {/*</ul>*/}
      </div>
    </div>
  </>;
}