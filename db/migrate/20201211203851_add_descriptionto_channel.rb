class AddDescriptiontoChannel < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :description, :text
  end
end
