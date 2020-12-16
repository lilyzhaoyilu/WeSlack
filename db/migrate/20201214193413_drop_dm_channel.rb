class DropDmChannel < ActiveRecord::Migration[5.2]
  def change
    # drop_table :dm_channels
    add_column :dmessages, :receiver_id, :integer
    remove_column :dmessages, :channel_id
    add_index :dmessages, :receiver_id
  end
end
