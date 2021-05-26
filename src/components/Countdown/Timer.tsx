import React from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
interface PropsInit{
  unittime:UnitTime
}
type UnitTime = 'second' |'minute'|'hour' | 'day' | 'month' | 'year'
export default function Timer(props: CircularProgressProps & { value: number } & PropsInit) {
  let {value,...rest} = props;
  let progressValue = (unit:UnitTime,value:number):number => {
    let res:number = 0;
    switch(unit){
      case 'second':
      case 'minute':
        res = Math.floor(value / 60 * 100);
        break;
      case 'hour':
        res = Math.floor(value / 24 * 100);
        break;
      case 'day':
        res = Math.floor(value / 30 * 100);
        break;
        case 'month':
          res = Math.floor(value / 12 * 100);
        break;
  }
  return res;
}
  return (
    <Box position="relative" display="inline-flex" >
        <CircularProgress variant="determinate"   className="circularProgress" value={progressValue(props.unittime,props.value)} color ="inherit" {...rest} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className="innerBox"
      >
        <Typography className="number" variant="caption" component="div" >{`${Math.round(
          props.value,
        )}`}</Typography>
        <Typography className="label" style={{textTransform:"capitalize"}} variant="caption" component="div">{props.unittime}{props.value > 1 ? 's':''}</Typography>
      </Box>
    </Box>
  );
}