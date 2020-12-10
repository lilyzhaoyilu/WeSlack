class RemoveChannelColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :member_ids
    remove_column :channels, :admin_id
  end
end
