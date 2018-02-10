import ReactOnRails from 'react-on-rails';

import Tracker from '../bundles/Tracker/components/Tracker';
import FoodManager from '../bundles/Tracker/components/FoodManager';
import FoodSelector from '../bundles/Tracker/components/FoodSelector';
import FoodRow from '../bundles/Tracker/components/FoodRow';


// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Tracker,
  FoodManager,
  FoodSelector,
  FoodRow,

});