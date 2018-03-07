class AddDailyDietIdToFoodPortions < ActiveRecord::Migration[5.0]
  def change
    add_column :food_portions, :daily_diet_id, :integer
  end
end
