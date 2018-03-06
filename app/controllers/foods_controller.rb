class FoodsController < ApplicationController
	def home_page
		dailyFoods = []
		dailyFoodPortions = FoodPortion.all
		dailyFoodPortions.each do |portion|
			dailyFoods.push([portion.food, portion.quantity, portion.id])
		end
		@tracker_props = {dailyDiet: dailyFoods}

	end
	def create
		#make food name validations on uniqueness
		@food = Food.create(name: params[:name], data: params)
		redirect_to "/home"
	end
end
