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
const getActualSleepHours = () => //concise function means no brackets, and use an implicit return
  getSleepHours('Monday')+
  getSleepHours('Tuesday')+
  getSleepHours('Wednesday')+
  getSleepHours('Thursday')+
  getSleepHours('Friday')+
  getSleepHours('Saturday')+
  getSleepHours('Sunday')
  //implicit return means no 'return' keyword

const getIdealSleepHours = () => {
  let idealHours = 9;
  return idealHours * 7;
}

const getSleepDebt = () => {
  let actualSleep = getActualSleepHours();
  let idealSleep = getIdealSleepHours();

  if(actualSleep === idealSleep){
    console.log('Congrats, you\'ve had the perfect amount of sleep.');
  }else if (actualSleep > idealSleep){
    console.log(`Wake up, Lazybones! You got an extra ${actualSleep - idealSleep} hours this week.`);
  }else{
    console.log(`You absolutely need to go back to bed.  You missed ${idealSleep - actualSleep} hours this week.`);
    //if actualSleep is less than idealSleep
  }
};
getSleepDebt()
