const getSleepHours = day => {
  switch(day){
    case 'Monday':
    return 8
    break;
    case 'Tuesday':
    return 6
    break;
    case 'Wednesday':
    return 8
    break;
    case 'Thursday':
    return 5
    break;
    case 'Friday':
    return 9
    break;
    case 'Saturday':
    return 8
    break;
    case 'Sunday':
    return 6
    break;
    default:
    'That\'s not a day.'
  };
}
const getActualSleepHours = () => {
  getSleepHours('Monday')+
  getSleepHours('Tuesday')+
  getSleepHours('Wednesday')+
  getSleepHours('Thursday')+
  getSleepHours('Friday')+
  getSleepHours('Saturday')+
  getSleepHours('Sunday')
  //implicit return means no 'return' keyword
}
const getIdealSleepHours = () => {
  let idealHours = 9;
  return idealHours * 7;
}
