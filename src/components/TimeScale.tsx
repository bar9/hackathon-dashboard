type IsoDate = string;
type RenderArea = number;

interface TimeScaleDef {
  start: IsoDate;
  end: IsoDate;
}

interface TimeScaleProps {
  def: TimeScaleDef;
  areaBefore:RenderArea;
  areaDuring:RenderArea;
  areaAfter:RenderArea;
}

interface TickDef {
  label: string,
  id: string
}

function ticksFromTimeScaleProps(props: TimeScaleProps): [TickDef[], TickDef[], TickDef[]] {
  //TODO real implementation
  return [
    [],
    [
      { label: "10:00", id: "x10am" },
      { label: "12:00", id: "" },
      { label: "14:00", id: "x2pm" },
      { label: "16:00", id: "" },
      { label: "18:00", id: "" },
      { label: "20:00", id: "x8pm" },
      { label: "22:00", id: "" },
      { label: "...", id: "" },
      { label: "06:00", id: "" },
      { label: "08:00", id: "" },
      { label: "10:00", id: "" }
    ],
    []
  ];
}

export default function TimeScale(props: TimeScaleProps) {
  const ticks = ticksFromTimeScaleProps(props);
  return <>
    <div className="flex flex-col w-full border-opacity-50 h-[90vh]">
      <div className="grid h-20 card bg-base-200 px-4">
        <ul className="steps steps-vertical">
          {ticks[0].map(tick =>
            <li id={tick.id} data-content="" className="border-4 border-blue-400 step step-primary">{tick.label}</li>
          )}
        </ul>
      </div>
      <div className="divider">START HACK</div>
      <div className="grid flex-grow card bg-base-200 px-4">
        <ul className="steps steps-vertical">
          {ticks[1].map(tick =>
            <li id={tick.id} data-content="●" className="border-4 border-blue-400 step step-primary">{tick.label}</li>
          )}
          {/*<li id="x10am" data-content="●" className="border-4 border-blue-400 step step-primary">10:00</li>*/}
          {/*<li data-content="" className="border-4 step step-primary">12:00</li>*/}
          {/*<li id="x2pm" data-content="●"className="border-4 border-blue-400 step step-primary">14:00</li>*/}
          {/*<li data-content="" className="border-4 step step-primary">16:00</li>*/}
          {/*<li data-content="" className="border-4 step">18:00</li>*/}
          {/*<li id="x8pm" data-content="●" className="border-4 border-blue-400 step">20:00</li>*/}
          {/*<li data-content="●" className="border-4 step">22:00</li>*/}
          {/*<li data-content="" className="border-4 step">...</li>*/}
          {/*<li data-content="●" className="border-4 step">06:00</li>*/}
          {/*<li data-content="" className="border-4 step">08:00</li>*/}
          {/*<li data-content="●" className="border-4 step">10:00</li>*/}
        </ul>
      </div>
      <div className="divider">END HACK</div>
      <div className="grid h-20 card bg-base-200 px-4">
        <ul className="steps steps-vertical">
        {ticks[2].map(tick =>
          <li className="step"></li>
        )}
        </ul>
      </div>
    </div>
  </>;
}