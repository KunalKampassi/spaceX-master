import React from "react";
import LazyImage from "../../UI/LazyImage/LazyImage";
import "./LaunchItem.css";

const FigureItem = React.memo((props) => {
  return (
    <figure className="figure-item">
      <LazyImage src={props.source} alt={props.name} />
    </figure>
  );
});

const DetailItem = React.memo((props) => {
  const isValueArray = Array.isArray(props.value);
  const detailValue = isValueArray ? (
    <ul className="detail-value">
      {props.value.length ? props.value.map((data) => <li key={data}>{data}</li>) : <li>NA</li>}
    </ul>
  ) : (
    <p className="detail-value">{props.value ? props.value + "" : "NA"}</p>
  );
  return (
    <div className={"launch-detail" + (isValueArray ? " type-list" : "")}>
      <p className="detail-label">{props.label}:</p>
      {detailValue}
    </div>
  );
});

const LaunchItem = React.forwardRef((props, ref) => {
  return (
    <div className="launch-item">
      <FigureItem source={props.mission_patch_small} name={props.mission_name} />

      <p ref={ref} className="launch-name">
        {props.mission_name} #{props.flight_number}
      </p>
      <DetailItem value={props.mission_id} label="Mission Ids" />
      <DetailItem value={props.launch_year} label="Launch Year" />
      <DetailItem value={props.launch_success} label="Successful Launch" />
      <DetailItem value={props.landing_success} label="Successful Landing" />
    </div>
  );
});

export default LaunchItem;
