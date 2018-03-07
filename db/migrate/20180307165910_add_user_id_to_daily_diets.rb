class AddUserIdToDailyDiets < ActiveRecord::Migration[5.0]
  def change
    add_column :daily_diets, :user_id, :integer
  end
end
