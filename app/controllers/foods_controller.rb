class FoodsController < ApplicationController
	def home_page
		if (user_signed_in?)
			dailyDiet = ""
			current_user.daily_diets.each do |daily|
				if (daily.created_at.to_date == Time.now.to_date)
					#found today's diet data
					dailyDiet = daily
				end
			end
			if (dailyDiet == "") #no diet found for today
				dailyDiet = DailyDiet.create(user_id: current_user.id)
			end
			dailyFoodPortions = dailyDiet.food_portions
			dailyFoods = []
			dailyFoodPortions.each do |portion|
				dailyFoods.push([portion.food, portion.quantity, portion.id])
			end
			cur_day = dailyDiet.created_at.strftime("%B %d, %Y")
			@tracker_props = {dailyDiet: dailyFoods, day: cur_day}
		else
			redirect_to controller: "devise/sessions", action: "new"
		end

	end
	def create
		#make food name validations on uniqueness
		@food = Food.create(name: params[:name], data: params)
		redirect_to "/home"
	end
end
