class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.integer :channel_id, :null => false
      t.integer :member_id, :null => false

      t.timestamps

    end
    add_index :members, :channel_id
    add_index :members, :member_id
  end
end
