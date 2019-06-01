const getSleepNumbers = day => {
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
