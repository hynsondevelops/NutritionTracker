class FoodPortionsController < ApplicationController
	def create
		@food = Food.create(name: params[:food][:name], data: params[:food])
		@foodPortion = FoodPortion.create(food_id: @food.id, quantity: params[:quantity])
		redirect_to controller: "foods", action: "home_page"
	end
end
