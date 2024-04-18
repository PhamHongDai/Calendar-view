import moment from "moment"

const CustomEvent = (props) =>  {
      return (
        <div style={{fontSize: "14px"}}>
          {props.event.title}
          {/* <strong>{moment(props.event.start).format('ha')}</strong> */}
        </div>
      );
    }
export default CustomEvent;