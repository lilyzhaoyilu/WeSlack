class AddPendingtoChannelUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :channel_users, :pending, :boolean, :default => false
  end
end
