import initialScreen from 'components/navigation/screens.json';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

const findNavigation = (arrayScreens, navigation) => {
  if (!arrayScreens) {
    return initialScreen;
  }
  const options = navigation ? navigation.subMenu : initialScreen;
  const newNavigation = find(options, item => item.id.toString() === arrayScreens[0]);
  if (!isEmpty(arrayScreens[1])) {
    return findNavigation(arrayScreens.splice(1, arrayScreens.length), newNavigation);
  }
  return newNavigation ? newNavigation.subMenu : initialScreen;
};

export default findNavigation;
