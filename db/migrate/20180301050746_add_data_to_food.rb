class AddDataToFood < ActiveRecord::Migration[5.0]
  def change
  	add_column :foods, :data, :string
  end
end
