class FoodPortionsController < ApplicationController
	def create
		@food = Food.create(name: params[:food][:name], data: params[:food])
		@foodPortion = FoodPortion.create(food_id: @food.id, quantity: params[:quantity])
		current_user.daily_diets.each do |daily|
			if (daily.created_at.to_date == Time.now.to_date)
				#found today's diet data
				daily.food_portions.push(@foodPortion)
			end
		end
		redirect_to controller: "foods", action: "home_page"
	end

	def update
	    if (@foodPortion = FoodPortion.find(params[:food][:food_portion_id]))
		    if (params[:quantity] == "0")
		    	@foodPortion.delete
		    else
			    @foodPortion.update(quantity: params[:quantity])	      
			end
		else
			@food = Food.create(name: params[:food][:name], data: params[:food])
			@foodPortion = FoodPortion.create(food_id: @food.id, quantity: params[:quantity])
		end
		redirect_to controller: "foods", action: "home_page"

	end

end
