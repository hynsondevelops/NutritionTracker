import Tracker from 'bundles/Tracker/components/Tracker';
import FoodManager from 'bundles/Tracker/components/FoodManager';
import FoodSelector from 'bundles/Tracker/components/FoodSelector';

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';



describe('Component: Tracker', () => {

	const trackerComponent = shallow(<Tracker dailyDiet={[]}/>)
	const foodManagerComponent = shallow(<FoodManager searchedFoods={trackerComponent.props("searchedFoods")} />)
	const foodSelectorComponent = shallow(<FoodSelector searchedFoods={foodManagerComponent.props("searchedFoods")} />)

	

	const search = foodSelectorComponent.find('.food_search')
	it('should have a search field', () => {
		expect(search.type()).toEqual("input")
	})

	it('should show results on character entry', () => {
		foodSelectorComponent.find('.food_search').simulate("change", {target: {value: "a"}})
		foodSelectorComponent.update()
		console.log(foodSelectorComponent.state("searchedFoods"))

		console.log(foodSelectorComponent.html())
		expect(foodSelectorComponent.state('searchString')).toEqual("a")
	})


});
