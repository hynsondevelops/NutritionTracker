class DailyDiet < ApplicationRecord
	has_many :food_portions
	belongs_to :user
end
