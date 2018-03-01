class FoodPortionsController < ApplicationController
	def create
		@food = Food.create(name: params[:food][:name], data: params[:food])
		@foodPortion = FoodPortion.create(food_id: @food.id, quantity: params[:quantity])
		redirect_to controller: "foods", action: "home_page"
	end

	def update
		print("Params")
		print(params)
		print("Params Food")
		print(params[:food])
	    @foodPortion = FoodPortion.find(params[:food][:food_portion_id])
	    if @foodPortion.update(quantity: params[:quantity])
	    	redirect_to controller: "foods", action: "home_page"
	    else
	      
		end
	end

end
