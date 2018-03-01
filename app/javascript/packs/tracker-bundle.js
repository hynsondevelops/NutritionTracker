import ReactOnRails from 'react-on-rails';

import Tracker from '../bundles/Tracker/components/Tracker';
import FoodManager from '../bundles/Tracker/components/FoodManager';
import FoodSelector from '../bundles/Tracker/components/FoodSelector';
import FoodRow from '../bundles/Tracker/components/FoodRow';
import DailyFoods from '../bundles/Tracker/components/DailyFoods';
import Macronutrients from '../bundles/Tracker/components/Macronutrients';
import Micronutrients from '../bundles/Tracker/components/Micronutrients';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Tracker,
  FoodManager,
  FoodSelector,
  FoodRow,
  DailyFoods,
  Macronutrients,
  Micronutrients,

});