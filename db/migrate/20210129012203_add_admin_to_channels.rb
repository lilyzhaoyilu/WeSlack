class AddAdminToChannels < ActiveRecord::Migration[5.2]
  def change
      add_column :channels, :admin_id, :integer
  end
end
