class CreateFoodPortions < ActiveRecord::Migration[5.0]
  def change
    create_table :food_portions do |t|
    	t.integer :food_id
    	t.decimal :quantity
      t.timestamps
    end
  end
end
