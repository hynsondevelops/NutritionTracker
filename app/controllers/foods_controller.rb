class FoodsController < ApplicationController
	def home_page
		if (params[:food_name] != nil)

			params[:food_name]
			response = RestClient::Request.execute(method: :get, url: "https://api.nal.usda.gov/ndb/search/?format=json&q=#{params[:food_name]}&sort=n&max=25&offset=0&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7")
			@foods = JSON.parse(response)["list"]["item"]
		end

	end
end
