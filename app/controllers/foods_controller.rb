class FoodsController < ApplicationController
	def home_page
		# if (params[:food_name] != nil)

		# 	params[:food_name]
		# 	response = RestClient::Request.execute(method: :get, url: "https://api.nal.usda.gov/ndb/search/?format=json&q=#{params[:food_name]}&sort=n&max=25&offset=0&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7")
		# 	foodDetails = []
		# 	JSON.parse(response)["list"]["item"].each do |item|
		# 		request = RestClient::Request.execute(method: :get, url: "https://api.nal.usda.gov/ndb/reports/?ndbno=#{item["ndbno"]}&type=f&format=json&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7")
		# 		foodDetails.push(JSON.parse(request)["report"]["food"])
		# 	end
		# 	print(foodDetails)
		# 	@tracker_props = {searchedFoods: foodDetails, dailyDiet: foodDetails}
		# else
		# 	response = RestClient::Request.execute(method: :get, url: "https://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7")
		# 	foodDetails = []
		# 	JSON.parse(response)["list"]["item"].each do |item|
		# 		request = RestClient::Request.execute(method: :get, url: "https://api.nal.usda.gov/ndb/reports/?ndbno=#{item["ndbno"]}&type=f&format=json&api_key=hyMAaC37dIT57p36cBZ1Sn6tK5XYfnOLP4IaNSs7")
		# 		foodDetails.push(JSON.parse(request)["report"]["food"])
		# 	end
		# 	@tracker_props = {searchedFoods: foodDetails, dailyDiet: foodDetails}

			
		# end
		@tracker_props = {}

	end
end
