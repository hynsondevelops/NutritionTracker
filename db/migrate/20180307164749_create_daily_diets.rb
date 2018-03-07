class CreateDailyDiets < ActiveRecord::Migration[5.0]
  def change
    create_table :daily_diets do |t|
    	
      t.timestamps
    end
  end
end
