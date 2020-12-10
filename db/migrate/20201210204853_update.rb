class Update < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :admin_id, :integer, default: [], array: true
    add_column :channels, :member_ids, :integer, default: [], array: true

    add_index :channels, :admin_id
    add_index :channels, :member_ids
  end
end
