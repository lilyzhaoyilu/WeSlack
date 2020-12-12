class CreateDmChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_channels do |t|
    t.integer :user1 , :null => false
    t.integer :user2 , :null => false

    t.timestamps
    end
    add_index :dm_channels, :user1
    add_index :dm_channels, :user2
  end
end
